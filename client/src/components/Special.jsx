import "./Special.css";
import { BsStars } from "react-icons/bs";

export default function Special() {
  return (
    <div className="component">
        <div className="titledesc">
            <h1 className="title">Black Friday Specials</h1>
            <p className="desc">We have black friday special which is 30% off on selected services. These offers are valid from 20th November - 25th November 2023.</p>
        </div>
        <div className="specials">
            {/* Bullet Points of each special */}
            <div className="special">
                <h1 className="special-title">
                    <BsStars />
                    Special #1
                </h1>
                <p className="special-desc">- Group starting from 3 people get 30% off massage treatment (Hotstone, Arometherapy and Deep Tissue)</p>
            </div>
            <div className="special" style={{marginTop: "1rem"}}>
                <h1 className="special-title">
                    <BsStars />
                    Special #2
                </h1>
                <p className="special-desc">- 20% off Full Body Scrub</p>
            </div>
            <div className="special" style={{marginTop: "1rem"}}>
                <h1 className="special-title">
                    <BsStars />
                    Special #3
                </h1>
                <p className="special-desc">- 20% off Body Wrap</p>
            </div>
        </div>
    </div>
  )
}
