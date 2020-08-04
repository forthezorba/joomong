import React from 'react';
import AskModal from '../../common/AskModal';

const AskRemoveModal = ({onModalEdit,visible,category_item_id, onCancel, onEdit,selected_item,selected_category,onModalRemove})=>{
    return(
        <AskModal
            visible={visible}
            confirmText="삭제"
            onCancel={onCancel}
            onEdit={onEdit}
            selected_category={selected_category}
            selected_item={selected_item}
            category_item_id={category_item_id}
            onModalRemove={onModalRemove}
            onModalEdit={onModalEdit}
        >
        </AskModal>
    )
}
export default AskRemoveModal;