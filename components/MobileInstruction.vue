<template>
  <div>
    <hero-section
      btn-type="link"
      title="Как работет приложение Wipon Pro <span class='text-primary'>для ПК</span>"
      :image-name="require('~/assets/images/macbook-pro.png')"
      @toggle="opened = !opened" />
    <instruction-list
      v-if="opened"
      :list="list"
      :with-btn="true" />
  </div>
</template>

<script>
import HeroSection from '~/components/HeroSection';
import InstructionList from '~/components/InstructionList';

export default {
  components: {
    InstructionList,
    HeroSection,
  },
  data() {
    return {
      list: [
        {
          index: 1,
          title: 'Скачайте программное обеспечения "Wipon для ПК"',
          image: 'pc_1',
        },
        {
          index: 2,
          title: 'Откройте приложение и авторизуйтесь через СМС-код (единожды)',
          image: 'pc_2',
        },
        {
          index: 3,
          title: 'Активируйте сканер штрих-кода, отсканировав код на коробке (единожды). Если кода на коробке нет, напишите нам в "Обратную связь".',
          image: 'pc_3',
        },
        {
          index: 4,
          title: 'Зарегистрируйте торговую точку (единожды)',
          image: 'pc_4',
        },
        {
          index: 5,
          title: 'Чтобы начать работу вам необходимо нажать на «начать сессию проверок»',
          image: 'pc_5',
        },
        {
          index: 6,
          title: 'Поднесите сканер к учетно-контрольной марке, нажмите на кнопку сканиварования на приборе и дождитесь результата проверки',
          image: 'pc_6',
        },
        {
          index: 7,
          title: 'Если не получается отсканировать, проверьте через ручной ввод',
          image: 'pc_7',
        },
      ],
      opened: false,
    };
  },
};
</script>
