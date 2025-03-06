import { useState } from "react";
import './Billsplitter.css';

function BillSplitter() {
    const [billAmount, setBillAmount] = useState("");
    const [numFriends, setNumFriends] = useState("");
    const [perPersonCost, setPerPersonCost] = useState(null);

    const handleSplit = () => {
        const amount = parseFloat(billAmount);
        const friends = parseInt(numFriends);

        if (!isNaN(amount) && friends > 0) {
            setPerPersonCost((amount / friends).toFixed(2));
        } else {
            setPerPersonCost(null);
        }
    };

    return (
        <div>
            <h2>Bill Splitter</h2>
            <input
                type="number"
                placeholder="Enter total bill amount"
                value={billAmount}
                className="billamount"
                onChange={(e) => setBillAmount(e.target.value)} />
            <input
                type="number"
                placeholder="Enter number of friends"
                className="billamount"
                value={numFriends}
                onChange={(e) => setNumFriends(e.target.value)} />
            <button
                onClick={handleSplit}>
                Split
            </button>
            {perPersonCost !== null && (
                <p>
                    Per Person Cost: ₹{perPersonCost}
                </p>
            )}
        </div>
    );
}
export default BillSplitter;