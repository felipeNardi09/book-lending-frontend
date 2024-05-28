import { useState } from "react";
import { CgAdd } from "react-icons/cg";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import CreateBook from "./CreateBook";
export default function AddBook() {
  const [toggleModal, setToggleModal] = useState(false);

  function handleModal() {
    setToggleModal((cur) => !cur);
  }

  return (
    <>
      <Button onClick={handleModal} type="secondary">
        <CgAdd />
        <span className="block">New book</span>
      </Button>
      {toggleModal && (
        <Modal onClose={handleModal}>
          <CreateBook setToggleModal={setToggleModal} />
        </Modal>
      )}
    </>
  );
}
