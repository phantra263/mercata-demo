import React from 'react';
import type { PaginationProps } from 'antd';
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Pagination } from 'antd';

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a><ArrowLeftOutlined /></a>;
  }
  if (type === 'next') {
    return <a><ArrowRightOutlined /></a>;
  }
  return originalElement;
};

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
  console.log(current, pageSize);
};

const PaginationCustom = () => (
  <>
    <Pagination simple 
      showSizeChanger
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={1} 
      total={30} 
      showTotal={(total, range) => `File ${range[0]}-${range[1]}`}
      itemRender={itemRender}/>
  </>
);

export default PaginationCustom;