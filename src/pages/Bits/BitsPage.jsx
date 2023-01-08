import "./BitsPage.scss";
import React, {useEffect} from "react";
import BitsList from "../../components/BitsList/bitsList";

function BitsPage(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bitspage">
      <BitsList />
    </div>
  );
}

export default BitsPage;