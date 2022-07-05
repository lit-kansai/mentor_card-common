import Answer from '@/components/parts/Answer.vue';
import CloseButton from '@/components/parts/CloseButton.vue';
import CourseIcon from '@/components/parts/CourseIcon.vue';
import Courses from '@/components/parts/Courses.vue';
import CourseSnsHeader from '@/components/parts/CourseSnsHeader.vue';
import MentorName from '@/components/parts/MentorName.vue';
import Nounai from '@/components/parts/Nounai.vue';
import Prefecture from '@/components/parts/Prefecture.vue';
import QueHeader from '@/components/parts/QueHeader.vue';
import SnsIcon from '@/components/parts/SnsIcon.vue';
import { getCardColor } from '@/main';
import '@testing-library/jest-dom';
import { shallowMount } from '@vue/test-utils';

const colors = {
  blue: '#1792CB',
  yellow: '#F0C11B',
  red: '#E83E37',
  green: '#66AE32',
  orange: '#EF862B',
  purple: '#7416CC',
  white: '#FCFCFC',
  black: '#333333',
  other: '#EF862B',
  '': '#EF862B'
};

describe('main.ts', () => {
  it('getCardColor()', () => {
    for (const [name, color] of Object.entries(colors)) {
      expect(getCardColor(name)).toMatch(color);
    }
  });
});

describe('Answer.vue', () => {
  it('body描画', () => {
    const body = 'We are LiT Kansai!';
    const wrapper = shallowMount(Answer, {
      propsData: { body }
    });
    wrapper.vm.$nextTick(() => {
      expect(wrapper.text()).toMatch(body);
    });
  });
});

describe('CloseButton.vue', () => {
  it('ボタン色', () => {
    for (const [variant, color] of Object.entries(colors)) {
      const wrapper = shallowMount(CloseButton, {
        propsData: { variant }
      });
      const style = wrapper.find('.mc-close_button-body').attributes().style;
      const c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color) || [];
      expect(style).toMatch(
        `background-color: rgb(${parseInt(c[1], 16)}, ${parseInt(
          c[2],
          16
        )}, ${parseInt(c[3], 16)});`
      );
    }
  });
});

describe('Courses.vue', () => {
  it('複数表示', () => {
    const courses = ['webs', 'android'];
    const wrapper = shallowMount(Courses, {
      propsData: { courses }
    });
    wrapper.findAll('img').wrappers.forEach((w, i) => {
      expect(w.attributes().src).toMatch(`/icon/${courses[i]}.png`);
    });
  });
});

describe('CourseIcon.vue', () => {
  it('アイコンパス', () => {
    const course = 'webs';
    const wrapper = shallowMount(CourseIcon, {
      propsData: { course }
    });
    expect(wrapper.find('img').attributes().src).toMatch(`/icon/${course}.png`);
  });
});

describe('CourseSnsHeader.vue', () => {
  it('テキスト描画', () => {
    const text = '-SNS-';
    const wrapper = shallowMount(CourseSnsHeader, {
      slots: { default: text }
    });
    expect(wrapper.text()).toMatch(text);
  });
});

describe('MentorName.vue', () => {
  it('テキスト描画', () => {
    const name = 'みず';
    const wrapper = shallowMount(MentorName, {
      propsData: { name }
    });
    expect(wrapper.text()).toMatch(name);
  });
});

describe('Nounai.vue', () => {
  it('UIDが存在する時', () => {
    const slackUid = 'XXXXXXX';
    const wrapper = shallowMount(Nounai, {
      propsData: { slackUid }
    });
    expect(wrapper.find('img').attributes().src).toMatch(
      `https://storage.googleapis.com/mentor-card-production.appspot.com/card/${slackUid}/nounai`
    );
  });
  it('UIDが存在しない時', () => {
    const wrapper = shallowMount(Nounai);
    expect(wrapper.find('img').exists()).toBe(false);
  });
});

describe('Prefecture.vue', () => {
  it('都道府県が存在する時', () => {
    const pref = 'osaka';
    const wrapper = shallowMount(Prefecture, {
      propsData: { pref }
    });
    expect(wrapper.find('img').attributes().src).toMatch(`/pref/${pref}.png`);
    expect(wrapper.text()).toMatch('大阪府');
  });
  it('都道府県が存在しない時', () => {
    const pref = 'osakafu';
    const wrapper = shallowMount(Prefecture, {
      propsData: { pref }
    });
    expect(wrapper.html()).toMatch('');
  });
});

describe('QueHeader.vue', () => {
  it('テキスト描画', () => {
    const text = '趣味';
    const wrapper = shallowMount(QueHeader, {
      propsData: { text }
    });
    expect(wrapper.text()).toMatch(text);
  });
});

describe('SnsIcon.vue', () => {
  it('アイコン描画', () => {
    const sns = 'twitter';
    const account = '@lit_mizu';
    const wrapper = shallowMount(SnsIcon, {
      propsData: { sns, account }
    });
    expect(wrapper.find('a').attributes().href).toMatch(
      'https://twitter.com/lit_mizu'
    );
    expect(wrapper.find('img').attributes().src).toMatch('/sns/twitter.png');
  });
});
