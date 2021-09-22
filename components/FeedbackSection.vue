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
        <form action="#" class="feedback-form">
          <div class="form-group">
            <label for="nameInput">имя</label>
            <input id="nameInput" class="form-input" type="text">
          </div>
          <div class="form-group">
            <label for="emailInput">почта</label>
            <input id="emailInput" class="form-input" type="email">
          </div>
          <div class="form-group">
            <label for="phoneInput">телефон</label>
            <input id="phoneInput" class="form-input" type="tel">
          </div>
          <div class="form-group question-textarea">
            <label for="questionInput">ваш вопрос</label>
            <textarea id="questionInput" class="form-input" rows="10" />
          </div>

          <a href="#" type="submit" class="btn btn-primary">Отправить</a>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeedbackSection'
}
</script>
