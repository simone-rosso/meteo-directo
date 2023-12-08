import React from 'react';
import {
    EuiBasicTable,
    EuiBasicTableColumn,
} from '@elastic/eui';

type CryptoCoin = {
    id: number;
    iconUrl: string;
    name: string;
    dateOfProjection: Date;
    currentRanking: number;
    projectedRanking: number;
    currentMarketCap: number;
    projectedMarketCap: number;
    totalSupply: number;
    equivalentPriceCurrentSupply: number;
    currentPrice: number;
    amount: number;
    currentTotal: number;
    projectedTotal: number;
    totalMoney: number;
    totalFutureMoney: number;
    Ratio: number
};

const Table = ({ rawData }: any) => {
    /**
     * Mobile column options
     */
    const columns: Array<EuiBasicTableColumn<CryptoCoin>> = [
        {
            field: 'name',
            name: 'Name',
            width: 'auto',
        },
        {
            field: 'market_cap_rank',
            name: 'Current Ranking',
        },
        {
            field: 'none',
            name: 'Projected Ranking',
        },
        {
            field: 'market_cap',
            name: 'Current Market Cap',
        },
        {
            field: 'none',
            name: 'Projected Market Cap',
        },
        {
            field: 'max_supply',
            name: 'Total Supply',
        },
        {
            field: 'circulating_supply',
            name: 'Circulating Supply',
        },
        {
            field: 'none',
            name: 'Equivalent price at current supply',
        },
        {
            field: 'current_price',
            name: 'Current Price ($)',
        },
        {
            field: 'none',
            name: 'Amount',
        },
        {
            field: 'none',
            name: 'Current Total',
        },
        {
            field: 'none',
            name: 'Projected Total',
        },
        {
            field: 'none',
            name: 'Total Money',
        },
        {
            field: 'none',
            name: 'Total Future Money',
        },
        {
            field: 'none',
            name: 'Ratio',
        },
    ];

    return (
        <EuiBasicTable
            tableCaption="Demo for responsive EuiBasicTable with mobile options"
            items={rawData}
            itemId="id"
            columns={columns}
            responsive={true}
        /* tableLayout={'fixed'} */
        />
    );
};

export default Table