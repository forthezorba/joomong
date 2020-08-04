import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AskModalblock = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;
const StyledButton = styled(Button)`
  height: 2rem;
  & + & {
    margin-left: 0.75rem;
  }
`;
const AskModal = ({
  visible,
  confirmText = "확인",
  cancelText = "취소",
  editText = "수정",
  onCancel,
  selected_item,
  selected_category,
  onModalRemove,
  onModalEdit,
}) => {
  const category_name = useRef("");
  const category_item_name = useRef("");
  const [localCategory, setlocalCategory] = useState();
  const [localCategoryItem, setlocalCategoryItem] = useState();
  useEffect(() => {
    setlocalCategory(selected_category);
    setlocalCategoryItem(selected_item);
  }, [selected_category, selected_item]);

  if (!visible) return null;

  return (
    <>
      {selected_category && (
        <Fullscreen>
          <AskModalblock>
            <h2>
              <input
                ref={category_name}
                type="text"
                value={localCategory}
                onChange={(e) => setlocalCategory(e.target.value)}
                readOnly={selected_item ? true : false}
              />
            </h2>

            {selected_item && (
              <p>
                <input
                  ref={category_item_name}
                  type="text"
                  value={localCategoryItem}
                  onChange={(e) => setlocalCategoryItem(e.target.value)}
                />
              </p>
            )}
            <div className="buttons">
              <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
              <StyledButton
                blue
                onClick={() => {
                  onModalEdit(
                    localCategory,
                    localCategoryItem
                  );
                }}
              >
                {editText}
              </StyledButton>
              <StyledButton red onClick={onModalRemove}>
                {confirmText}
              </StyledButton>
            </div>
          </AskModalblock>
        </Fullscreen>
      )}
    </>
  );
};
export default AskModal;
