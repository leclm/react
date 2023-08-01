import React from "react";
import Button from "./Button";
import Modal from "./Modal";

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <Button texto="Abrir" modal={modal} setModal={setModal} />
    </>
  )
}

export default App;