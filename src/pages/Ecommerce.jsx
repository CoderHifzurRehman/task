import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import {  Pie, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData,ordersData, contextMenuItems, ordersGrid } from '../data/dummy';



const Ecommerce = () => {

  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div style={{ backgroundColor: "rgb(227 227 228)" }} >
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        
        <div className="flex m-3 flex-wrap justify-center gap-5 items-center ">
          {earningData.map((item) => (
            <div key={item.title} className="flex items-center gap-2 bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg  p-4  rounded-2xl ml-4 ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-7xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className=" flex flex-col">
              <span className="text-sm text-gray-400  mt-1">{item.title}</span>
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} `}>
                  {item.percentage}
                </span>
                
              </p>
              
            </div>
          ))}
        </div>
      </div>

      <div className="flex  flex-wrap  justify-center w-full">
        
          <div
            className=" rounded-2xl   p-4 m-2 pt-6 pb-6  w-full lg:w-6/12 flex flex-wrap "
            style={{ backgroundColor: "white" }}
          >
            <div className="flex justify-start flex-col  ">
              <p className="font-semibold text-black-400 text-3xl">Overview</p>
              <p className="text-gray-600 text-l">Monthly Earning</p>
              
            </div>

            <div className="mt-4 flex  flex-col ">
              
              <SparkLine  id="column-sparkLine" key={SparklineAreaData.barName} height="200px" type="Column" data={SparklineAreaData} width="600"
                color={"grey"} 
                className=" flex gap-4 " >  
              </SparkLine>
              
              <div>{SparklineAreaData.map((bardata) => (
              <span className='font-semibold text-gray-600 text-xs pr-4 pl-3' style={{width:100}}>
                  {bardata.barName}
                </span> 
                ))}
          </div>
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl  p-4 m-2   flex flex-col justify-center items-center gap-10 w-full lg:w-2/12 flex-wrap ">
            <div>
              <p className="text-2xl font-semibold ">Customers</p>
              <p className="text-sm text-gray-400">Customers that buy products</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
      </div>

      
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <p className="text-3xl font-extrabold tracking-tight text-slate-900 pb-5">
      Product Sell
    </p>
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>

      
    </div>
  );
};

export default Ecommerce;
