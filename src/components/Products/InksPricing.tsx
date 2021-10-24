import PricingTable, { PricingRow } from "../PricingTable";

type Props = {
    inks: PricingRow[]
}

const InksPricing = ({ inks }: Props) => {
    return <PricingTable pricingTable={inks}/>
};

export default InksPricing;