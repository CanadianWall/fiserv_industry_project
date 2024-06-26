import "./StepZeroPaymentPage.scss";
import Footer from "../Footer/Footer";
import PayWithButton from "../PayWithButton/PayWithButton";
import ComfirmPayment from "../GeneralButton/GeneralButton";

export default function StepZeroPaymentPage({ payMethod, price, seatvalue }) {
  payMethod = "Seat";
  price = 39.82;
  seatvalue = 1;
  return (
    <div className="formstep2">
      <div className="formstep2__header">
        <div className="headerbuttonwrap">placholder0-button</div>
      </div>
      <div className="formstep2__body">
        <div className="top">
          <div className="top__titlewrap">Pay by {payMethod}</div>
          <div className="top__progresswrap">placeholder1-progressbar</div>
          <div className="top__pricewrap">${price}</div>
          <div className="top__messagewrap">
            For Uni Suchi - Seat {seatvalue}
          </div>
          <div className="middle">
            <PayWithButton method="Debit or Credit" text="some" s />
            <PayWithButton method="Zelle" text="somehum" />
            <PayWithButton method="Apple Pay" text="somehumbum" />
          </div>
        </div>

        <div className="bottom">
          <ComfirmPayment
            text="Confirm Payment"
            buttonclass="comfirmpaymentbutton"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
