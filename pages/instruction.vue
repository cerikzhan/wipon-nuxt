<template>
  <div class="indexPage">
    <instructions-block
      v-for="(item, index) in instructions"
      :key="item.title"
      :title="item.title"
      :list="item.list"
      :image-name="item.image"
      :with-btn="item.withBtn"
      :is-terminal="index === 1" />
  </div>
</template>

<script>
import InstructionsBlock from '~/components/InstructionsBlock';

export default {
  layout: 'layout',
  components: {
    InstructionsBlock,
  },
  data() {
    return {
      instructions: [
        {
          title: 'Как работет приложение Wipon Pro <span class="text-primary">для ПК</span>',
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
              title: 'Чтобы начать работу вам необходимо нажать на "начать сессию проверок"',
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
          image: require('~/assets/images/macbook-pro.png'),
          withBtn: true,
        },
        {
          title: 'Как работает <span class="text-primary">мобильное приложение</span> Wipon Pro',
          list: [
            {
              index: 1,
              title: 'Откройте приложение и авторизуйтесь через СМС-код (единожды)',
              image: 'mobile_1',
            },
            {
              index: 2,
              title: 'Активируйте прибор, отсканировав код на коробке (единожды). Если кода на коробке нет, напишите нам в "Обратную связь".',
              image: 'mobile_1',
            },
            {
              index: 3,
              title: 'Зарегистрируйте торговую точку (единожды)',
              image: 'mobile_1',
            },
            {
              index: 4,
              title: 'Нажмите на логотип Wipon для запуска сканера',
              image: 'mobile_1',
            },
            {
              index: 5,
              title: 'Поднесите сканер к учетно-контрольной марке, нажмите на кнопку сканиварования на приборе и дождитесь результата проверки',
              image: 'mobile_1',
            },
            {
              index: 6,
              title: 'Если не получается отсканировать, проверьте через ручной ввод',
              image: 'mobile_1',
            },
            {
              index: 7,
              title: 'При обнаружении нарушения отправьте жалобу в Органы государственных доходов МФ РК, нажав на результат проверки учетно-контрольной марки',
              image: 'mobile_1',
            },
          ],
          image: require('~/assets/images/mobiles.png'),
          withBtn: false,
        },
      ],
    };
  },
};
</script>
