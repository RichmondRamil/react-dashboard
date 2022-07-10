import React from "react";
import {
  mastercard,
  bpi,
  bdo,
  gcash,
  pnb,
  amazon,
  github,
  virtual,
  slack,
  google,
} from "../../assets";
import "./depositandwithdraw.scss";

const DepositAndWithdraw = () => {
  return (
    <div className="depositandwithdraw">
      <div className="depositandwithdraw-container">
        <div className="left">
          <div className="title">
            <h3>Deposit</h3>
            <p>View all</p>
          </div>
          <div className="items">
            <div className="item">
              <img src={mastercard} alt="" />
              <div className="description">
                <p>Mastercard Account</p>
                <span>Sell UI Kit</span>
              </div>
            </div>
            <div className="total">+₱20,279</div>
          </div>
          <div className="items">
            <div className="item">
              <img src={bpi} alt="" />
              <div className="description">
                <p>BPI Account</p>
                <span>Wallet Deposit</span>
              </div>
            </div>
            <div className="total">+₱78,279</div>
          </div>
          <div className="items">
            <div className="item">
              <img src={bdo} alt="" />
              <div className="description">
                <p>BDO Account</p>
                <span>IOS Application</span>
              </div>
            </div>
            <div className="total">+₱42,279</div>
          </div>
          <div className="items">
            <div className="item">
              <img src={gcash} alt="" />
              <div className="description">
                <p>Gcash Account</p>
                <span>Bank Transfer</span>
              </div>
            </div>
            <div className="total">+30,279</div>
          </div>
          <div className="items">
            <div className="item">
              <img src={pnb} alt="" />
              <div className="description">
                <p>PNB Account</p>
                <span>Wallet Deposit</span>
              </div>
            </div>
            <div className="total">+₱120,279</div>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <h3>Withdraw</h3>
            <p>View all</p>
          </div>
          <div className="items">
            <div className="item">
              <img src={google} alt="" />
              <div className="description">
                <p>Google Adsense</p>
                <span>Paypal Deposit</span>
              </div>
            </div>
            <div className="total">+₱20,279</div>
          </div>
          <div className="items">
            <div className="item">
              <img src={github} alt="" />
              <div className="description">
                <p>Github Enterprice</p>
                <span>Security and Complience</span>
              </div>
            </div>
            <div className="total">+₱78,279</div>
          </div>
          <div className="items">
            <div className="item">
              <img src={slack} alt="" />
              <div className="description">
                <p>Upgrade Slack Plan</p>
                <span>Debit card deposit</span>
              </div>
            </div>
            <div className="total">+₱42,279</div>
          </div>
          <div className="items">
            <div className="item">
              <img src={virtual} alt="" />
              <div className="description">
                <p>Digital Ocean</p>
                <span>Cloud Hosting</span>
              </div>
            </div>
            <div className="total">+30,279</div>
          </div>
          <div className="items">
            <div className="item">
              <img src={amazon} alt="" />
              <div className="description">
                <p>AWS Account</p>
                <span>Choose a cloud platform</span>
              </div>
            </div>
            <div className="total">+₱120,279</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositAndWithdraw;
