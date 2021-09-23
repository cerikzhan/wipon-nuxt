<template>
  <section class="pay-section">
    <div class="container">
      <div class="payment-card">
        <div class="card-header">
          <img src="~/assets/images/kaspi.png" alt="kaspi">
        </div>
        <div class="card-body">
          <form action="#" class="kaspi-form">
            <div class="form-group radio-group">
              <div>
                <input
                  id="accountNumberType"
                  type="radio"
                  name="payment-type"
                  checked
                  value="account">
                <label for="accountNumberType">Лицевой счёт</label>
              </div>
              <div>
                <input
                  id="phoneNumberType"
                  type="radio"
                  name="payment-type"
                  value="number">
                <label for="phoneNumberType">Текущий номер телефона</label>
              </div>
            </div>
            <div class="form-group">
              <label for="phoneNumber">Лицевой счёт</label>
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
