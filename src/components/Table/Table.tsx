import React, { useState } from 'react';
import {
    formatDate,
    EuiBasicTable,
    EuiBasicTableColumn,
    EuiLink,
    EuiHealth
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

export default ({rawData}:any) => {
    /**
     * Mobile column options
     */
    const columns: Array<EuiBasicTableColumn<CryptoCoin>> = [
        {
            field: 'name',
            name: 'Name',
            truncateText: true,
        },
        {
            field: 'market_cap_rank',
            name: 'Current Ranking',
            truncateText: true,
        },
        {
            field: 'market_cap',
            name: 'Current Market Cap',
            truncateText: true,
        },
    ];  

    return (
        <EuiBasicTable
            tableCaption="Demo for responsive EuiBasicTable with mobile options"
            items={rawData}
            itemId="id"
            columns={columns} 
            responsive={true}
        />
    );
};