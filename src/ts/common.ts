import ImgDrop from './modules/_imgDrop';
import ToggleIsOpen from './modules/_toggleIsOpen';
import Slide from './modules/_slide';
import Popup from './modules/_popup';
import '../scss/style.scss';

const imgDropObj = {
    labelClass: 'js-dropArea', // HTMLLabelElementのクラス名
    inputClass: 'js-inputFile' // HTMLInputElementのクラス名
};
const menuObj = {
    parentClass: 'js-parentMenu',
    handleClass: 'js-handleMenu'
};
const slideObj = {
    handleClass : 'js-handleSlide',
    targetClass : 'js-targetSlide',
    parentClass : 'js-parentSlide'
};
const exportModalObj = {
    handleShowClass: 'js-showExportModal',
    handleHideClass: 'js-hideModal',
    targetClass: 'js-targetExportModal',
    parentId: 'exportModal'
};
const deleteModalObj = {
    handleShowClass: 'js-showDeleteModal',
    handleHideClass: 'js-hideModal',
    targetClass: 'js-targetDeleteModal',
    parentId: 'deleteModal'
};

new ImgDrop(imgDropObj);
new ToggleIsOpen(menuObj);
new Slide(slideObj);
new Popup(exportModalObj);
new Popup(deleteModalObj);

