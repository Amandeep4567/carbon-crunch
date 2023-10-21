import React, { useState } from "react";
import { BsCurrencyBitcoin, BsArrowRight } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { SiRipple, SiLitecoin } from "react-icons/si";

const TokenSale = ({ buyToken, tokenSale }) => {
  const [nToken, setNToken] = useState(1);

  const percentage = (tokenSale?.tokenSold / tokenSale?.tokenSaleBalance) * 100;
  const showPercentage = percentage.toString();
  return (
    <section
      id="token"
      className="section_token token_sale bg_light_dark"
      data-z-index="1"
      data-parallax="scroll"
      data-image-src="assets/images/token_bg.png"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Token Sale
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                nulla repellat voluptatibus tenetur quis totam omnis facere
                facilis quibusdam officia voluptatem quia deleniti. Rerum maxime
                ab magnam sint quos rem?
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Starting time
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                July 23, 2023 (Mon 10:00 Am)
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Ending Time:
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                July 13, 2023 (Mon 10:00 Am)
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Token exchange rate
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                I ETH = 1 TBC, 1ECC = 1TBC
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="token_sale res_md_mb_40 res_md_mt_40 res_sm_mb_30 res_sm_mt_30">
              <div
                className="animation tk_countdown text-center token_countdown_bg"
                data-animation="fadeInUp"
                data-animation-delay="0.1s"
              >
                <div className="field_form">
                  <div className="row">
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.4s"
                    >
                      <input
                        type="number"
                        required
                        placeholder="1"
                        id="first-name"
                        min={1}
                        className="form-control"
                        onChange={(e) => setNToken(e.target.value)}
                        name="token"
                      />
                    </div>
                  </div>
                </div>

                <div className="tk_counter_inner">
                  <div
                    className="progress animation"
                    data-animation="fadeInUp"
                    data-animation-delay="1.3s"
                  >
                    <div
                      className="progress-bar progress-bar-striped gradient"
                      role="progressbar"
                      aria-valuenow={`${percentage}`}
                      aria-valuemin={"0"}
                      aria-valuemax={"100"}
                      style={{
                        width: `${percentage}`,
                      }}
                    >
                      {showPercentage.slice(0, 4)}%
                    </div>
                    <span className="progress_label bg-white inline_style_1">
                      <strong>{tokenSale?.tokenSold}TBS</strong>
                    </span>
                    <span className="progress_label bg-white inline_style_2">
                      <strong>{tokenSale?.tokenSaleBalance}TBS</strong>
                    </span>
                    <span className="progress_min_val">Sale Raised</span>
                    <span className="progress_max_val">Soft Caps</span>
                  </div>
                </div>

                <a
                  onClick={() => buyToken(nToken)}
                  className="btn btn-default btn-radius animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.1s"
                >
                  Buy Tokens <BsArrowRight />
                </a>

                <ul className="icon_list list_none d-flex justify-content-center">
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.1s"
                  >
                    <FaEthereum />
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.1s"
                  >
                    <BsCurrencyBitcoin />
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.1s"
                  >
                    <SiRipple />
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.1s"
                  >
                    <SiLitecoin />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Low High 24 h:
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                $4,534343 - $2,35454
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Total tokens sale
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                {tokenSale?.tokenSold}TBC {showPercentage.slice(0, 4)}%
              </p>
            </div>
            <div className="pr_box">
              <h6
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Accepted Currency:
              </h6>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                BTC, ETH, LTC, XRP
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSale;
