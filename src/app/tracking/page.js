'use client';


import OrderTimeline from '../components/OrderTimeline';
import OrderItems from '../components/OrderItems';
import LiveUpdates from '../components/LiveUpdates';
import DeliveryInfo from '../components/DeliveryInfo';
import OrderCard from '../components/OrderCard';
import PageHeader from '../components/PageHeader';

export default function OrderTrackingPage() {
  const orderData = {
    estimatedTime: '25 minutes',
    progress: 50,
    status: 'In Progress',
    timeline: [
      { id: 1, status: 'Order Placed', completed: true, time: '6:45 PM' },
      { id: 2, status: 'Preparing', completed: true, time: '6:48 PM' },
      { id: 3, status: 'Ready for Pickup', completed: false, time: 'Est. 7:05 PM' },
      { id: 4, status: 'Delivered', completed: false, time: 'Est. 7:10 PM' }
    ],
    items: [
      {
        id: 1,
        name: 'Grilled Atlantic Salmon',
        quantity: 1,
        price: 28.00,
        extras: ['No vegetables', 'Extra lemon']
      },
      {
        id: 2,
        name: 'Truffle Pasta Primavera',
        quantity: 2,
        price: 44.00,
        extras: ['Medium spicy']
      },
      {
        id: 3,
        name: 'Chocolate Lava Cake',
        quantity: 1,
        price: 12.00,
        extras: ['Vanilla ice cream']
      }
    ],
    liveUpdates: [
      'Chef is preparing your Grilled Atlantic Salmon',
      'Truffle Pasta Primavera is next in queue',
      'Dessert will be prepared fresh when mains are ready'
    ],
    deliveryAddress: '123 Main Street, Downtown, City 12345',
    phoneNumber: '(555) 123-4567'
  };

  return (
    <>
    <PageHeader title="Order Tracking" subtitle="Order #BV-2024-001234" />
    <div className="min-h-screen bg-gray-50 py-8 px-4">
          <OrderCard 
  estimatedTime={orderData.estimatedTime} 
  progress={orderData.progress} 
  status={orderData.status} 
/>
      <div className="max-w-[850px] mx-auto mb-5 bg-white rounded-[15px] shadow-lg p-6 overflow-hidden">


        <OrderTimeline timeline={orderData.timeline} />
          </div>
   
      <div className="max-w-[850px] mx-auto mb-5 bg-white rounded-[15px] shadow-lg overflow-hidden">
        <OrderItems items={orderData.items} />
        </div>
            <div className="max-w-[850px] mx-auto mb-5 bg-white rounded-[15px] shadow-lg overflow-hidden">
        <LiveUpdates updates={orderData.liveUpdates} />
        </div>
<div className="max-w-[910px] mx-auto mb-5  overflow-hidden">

               <div className="grid grid-cols-2  px-[30] gap-3 mb-4">
            <button className="  text-nowrap   py-3 px-4 border-1 border-[#334f3b] text-[#334f3b] font-[500] text-[13px] rounded-lg hover:bg-[#334f3b]  hover:text-white transition-colors">
             
           
              Contact Restaurant
            </button>
            <button className="py-3 px-4  text-nowrap  bg-gradient-to-br from-[#334f3b] to-[#21c24f] hover:bg-gradient-to-bl  text-white font-[500] text-[13px]  rounded-lg h0 transition-colors">
              Modify Order
            </button>
          </div>

</div>

        <div className="px-6 pb-6  max-w-[850px] mx-auto  bg-white rounded-[15px] shadow-lg overflow-hidden ">
   
          
          <DeliveryInfo 
            address={orderData.deliveryAddress}
            phoneNumber={orderData.phoneNumber}
          />
      
      </div>
    </div>
    </>
  );
}