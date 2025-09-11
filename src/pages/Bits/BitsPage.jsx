import "./BitsPage.scss";
import {useEffect} from "react";
import BitsList from "../../components/BitsList/bitsList";

function BitsPage() {

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