import React, { memo } from "react";

import { PaginationWrapper } from "./style";
import { Pagination } from "antd";

interface QLPagenationProps {
  currentPage: number;
  total: number;
  pageSize: number;
  onPageChange: any;
}

export default memo(function QLPagenation(props: QLPagenationProps) {
  const { currentPage, total, pageSize, onPageChange } = props;

  const itemRender = (current: number, type: string, originalElement: any) => {
    if (type === "prev") {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === "next") {
      return <button className="control next">上一页 &gt;</button>;
    }
    return originalElement;
  };

  return (
    <PaginationWrapper>
      <Pagination
        className="pagination"
        size="small"
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange}
      />
    </PaginationWrapper>
  );
});
