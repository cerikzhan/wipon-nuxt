<template>
  <section class="pay-section">
    <div class="container">
      <div class="payment-card">
        <div class="card-header">
          <img src="~/assets/images/wooppay.png" alt="wooppay">
        </div>
        <div class="card-body">
          <form action="#" class="wooppay-form">
            <div class="form-group">
              <label for="phoneNumber">номер телефона</label>
              <input
                id="phoneNumber"
                class="form-input"
                type="tel">
            </div>
            <div class="form-group">
              <label for="totalSum">сумма пополнения</label>
              <input
                id="totalSum"
                class="form-input"
                type="text">
            </div>
            <button type="submit" class="btn btn-primary btn-submit">
              Оплатить
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'layout',
};
</script>
