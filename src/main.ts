import Vue from 'vue';
import DecoratedModal from './components/DecoratedModal.vue';
import MentorInfo from './components/MentorInfo.vue';
import MentorModal from './components/MentorModal.vue';
import Modal from './components/Modal.vue';

function install(vue: typeof Vue) {
  const components = {
    MentorInfo,
    Modal,
    DecoratedModal,
    MentorModal
  };
  for (const [name, c] of Object.entries(components)) {
    vue.component(name, c);
  }
}

function getCardColor(color?: string): string {
  switch (color) {
    case 'blue':
      return '#1792CB';
    case 'yellow':
      return '#F0C11B';
    case 'red':
      return '#E83E37';
    case 'green':
      return '#66AE32';
    case 'orange':
      return '#EF862B';
    case 'purple':
      return '#7416CC';
    case 'white':
      return '#FCFCFC';
    case 'black':
      return '#333333';
  }
  return '#EF862B';
}

export default { install };
export { MentorInfo, Modal, DecoratedModal, MentorModal, getCardColor };
