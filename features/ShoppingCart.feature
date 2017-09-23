# language: zh-TW
功能: 哈利波特購物車
    建立一個 購物車 應用程式，根據買不同集數有不同折扣

    1. 一到五集的哈利波特，每一本都是賣100元
    2. 如果你從這個系列買了兩本不同的書，則會有5%的折扣
    3. 如果你買了三本不同的書，則會有10%的折扣
    4. 如果是四本不同的書，則會有20%的折扣
    5. 如果你一次買了整套一到五集，恭喜你將享有25%的折扣 6. 需要留意的是，如果你買了四本書，其中三本不同，第四本
    則是重複的，那麼那三本將享有10%的折扣，但重複的那一 本，則仍須100元。

    場景: 購買第一集一本
        假設 進入購物車頁面
        並且 選擇第 "1" 集，數量 "1" 一本
        當 選擇完畢，計算價格
        那麼 折扣後價格為 "100" 元

    場景: 購買一, 二集各一本
        假設 進入購物車頁面
        並且 選擇第 "1" 集，數量 "1" 一本
        並且 選擇第 "2" 集，數量 "1" 一本
        當 選擇完畢，計算價格
        那麼 折扣後價格為 "190" 元

    場景: 購買一, 二, 三集各一本
        假設 進入購物車頁面
        並且 選擇第 "1" 集，數量 "1" 一本
        並且 選擇第 "2" 集，數量 "1" 一本
        並且 選擇第 "3" 集，數量 "1" 一本
        當 選擇完畢，計算價格
        那麼 折扣後價格為 "270" 元

    場景: 購買一到四集各一本
        假設 進入購物車頁面
        並且 選擇第 "1" 集，數量 "1" 一本
        並且 選擇第 "2" 集，數量 "1" 一本
        並且 選擇第 "3" 集，數量 "1" 一本
        並且 選擇第 "4" 集，數量 "1" 一本
        當 選擇完畢，計算價格
        那麼 折扣後價格為 "320" 元
