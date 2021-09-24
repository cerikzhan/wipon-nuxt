<template>
  <section class="feedback-section">
    <div class="container">
      <div class="inner-wrapper">
        <h2 class="section-title">
          Остались вопросы?
        </h2>
        <p class="feedback-text">
          Наша техподдержка ответит на все вопросы и поможет с установкой
        </p>
        <form class="feedback-form" @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="nameInput">имя</label>
            <input
              id="nameInput"
              v-model="form.name"
              class="form-input"
              type="text"
              required>
          </div>
          <div class="form-group">
            <label for="emailInput">почта</label>
            <input
              id="emailInput"
              v-model="form.email"
              class="form-input"
              type="email"
              required>
          </div>
          <div class="form-group">
            <label for="phoneInput">телефон</label>
            <input
              id="phoneInput"
              v-model="form.phone"
              class="form-input"
              type="tel"
              @input="onInputPhone($event.target)">
          </div>
          <div class="form-group question-textarea">
            <label for="questionInput">ваш вопрос</label>
            <textarea
              id="questionInput"
              v-model="form.text"
              class="form-input"
              rows="10"
              required></textarea>
          </div>

          <button
            href="#"
            type="submit"
            class="btn btn-primary btn-submit">
            Отправить
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeedbackSection',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        text: '',
      },
    };
  },
  methods: {
    onInputPhone(input) {
      const phoneInput = input;
      const x = phoneInput.value.replace(/\D/g, '').match(/(\d?)(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      if (x && x[1] === '7') {
        if (x[2] && x[2][0] !== '7') { x[2] = '' }
        this.form.phone = !x[2]
          ? `+${x[1]}`
          : `+${x[1]} (${x[2]}${!x[3]
            ? ''
            : `) ${x[3]}${!x[4]
              ? ''
              : `-${x[4]}${!x[5]
                ? ''
                : `-${x[5]}`}`}`}`;
      } else {
        this.form.phone = '';
      }
    },
    onSubmit() {
      this.$toast.success('Отправляем данные...');
      this.$axios.post(
        'https://cabinet.wipon.pro/send-feedback-pro',
        { ...this.form, date: Date.now() },
        {
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json;charset=UTF-8',
          },
        },
      ).then(() => {
        this.$toast.clear();
        this.$toast.success('Спасибо! Мы вам ответим в ближайшее время');

        setTimeout(() => {
          this.$toast.clear();
        }, 2000);
      }).catch(() => {
        this.$toast.clear();
        this.$toast.error('Что то пошло не так');

        setTimeout(() => {
          this.$toast.clear();
        }, 2000);
      });
    },
  },
};
</script>
