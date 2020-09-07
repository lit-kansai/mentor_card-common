<template>
  <div id="app">
    <button @click="onClick">Open modal</button>
    <MentorModal :mentor="mentor" @close="onClose" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MentorModal from '@/components/MentorModal.vue';
import { Mentor } from '@/models/mentor';

@Component({
  components: {
    MentorModal
  }
})
export default class App extends Vue {
  mentor?: Mentor | null = null;

  onClick() {
    this.mentor = new Mentor({
      id: 'mizu.goto',
      slackUid: 'UMWDEQ28K',
      color: 'blue',
      name: 'みず',
      nameEn: 'mizu',
      area: 'kansai',
      prefecture: 'kyoto',
      city: '京都市',
      twitter: '@lit_mizu',
      facebook: 'https://facebook.com/Ritsuki.Goto',
      instagram: '',
      courses: ['webs', 'android'],
      profile: [
        {
          title: '趣味',
          body:
            'Webサービス開発\n自宅サーバー運用\nネットワーク構築\n音楽を聞くこと\n音楽ゲーム\n写真を撮ること ← New!'
        },
        {
          title: 'よく使うアプリ',
          body: 'Apple Music\nKyash\nデレステ\nTwitter\nKeybase\n限界しりとり'
        },
        {
          title: 'ひとこと',
          body:
            'メンターカードポータルを作った人だよ！\n\n中学生の頃、ゲームセンターの音楽ゲームにハマったものの\n田舎に住んでいたため車で1時間ほど移動した所にしか\nそのゲームがなく何を思ったのかコントローラーを自作した事がある...。'
        },
        {
          title: '使ってる機器',
          body:
            '【開発環境】\nMacBook Pro 16-Inch (2019)\nIBM Space Saver Keyboard Model M 1397681\nLogicool G903\niiyama E2273HDS x2\n\n【持ち運び機材】\nMacBook Pro 16-Inch (2019)\niPad Pro 10.5-Inch Gen2\nUQ WiMAX W05\n\n【カメラ】\nSony α7(ILCE-7)\nSony SEL70200G\nSony SEL2870F\nNikon Nikomat FTn\nNippon Kogaku 50mm F1.8\nNikon 28mm F3.5\nCONTAX Zeiss 50mm F1.4\nCONTAX Zeiss 135mm F2.8\nCanon EF17-40/F4L\n\n---\n\n開発外でストレスを感じたくないので気に入ったものを使いたいタイプ'
        },
        {
          title: '座右の銘',
          body:
            '「焙烙の割れも三年置けば役に立つ」\n\n今は役に立たないと思っていることも、いつか役に立つかもしれない。世の中に無用のものはない。という意味のことわざです。\n「一見無駄に見えることも、幸せな未来に繋がってるかもしれないよ。」という自分のスタンスから来た座右の銘です！'
        }
      ]
    });
  }

  onClose() {
    this.mentor = null;
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

html,
body {
  background: #ccc;
  height: 100%;
  width: 100%;
}

button {
  font-size: 24pt;
  border-radius: 100px;
  background: #1792cb;
  padding: 12px 24px;
  color: white;
  border: solid 4px white;
  cursor: pointer;
  margin: 32px auto;
  display: block;
}

button:hover {
  opacity: 0.7;
}
</style>
