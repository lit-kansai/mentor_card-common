import Vue from 'vue';
import DecoratedModal from './components/DecoratedModal.vue';
import MentorInfo from './components/MentorInfo.vue';
import MentorModal from './components/MentorModal.vue';
import MentorInfoUi from './components/MentorInfoUi.vue';
import Modal from './components/Modal.vue';
declare function install(vue: typeof Vue): void;
declare function getCardColor(color?: string): string;
declare const _default: {
    install: typeof install;
};
export default _default;
export { MentorInfo, Modal, DecoratedModal, MentorModal, MentorInfoUi, getCardColor };
