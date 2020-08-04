import React from "react";
import AskModal from "../../common/AskModal";
import FormModal from "../../common/FormModal";

const AskCreateModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <FormModal
      visible={visible}
      title="제목"
      description="주소"
      confirmText="확인"
      onConfirm={onConfirm}
      onCancel={onCancel}
    >
    </FormModal>
  );
};
export default AskCreateModal;
