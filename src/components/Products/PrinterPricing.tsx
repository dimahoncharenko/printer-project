import PricingTable, { PricingRow } from "../PricingTable";

type Props = {
    printers: PricingRow[]
}

const PrinterPricing = ({ printers }: Props) => {
    return <PricingTable pricingTable={printers}/>
};

export default PrinterPricing;