import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
      <h3 className="mb-4 text-2xl font-bold">📖 How to Use Your Ticket</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-lg bg-white/10 p-4">
          <div className="mb-2 text-3xl">1️⃣</div>
          <div className="font-semibold">Visit Restaurant</div>
          <div className="mt-1 text-sm text-blue-100">
            Go to any partner restaurant
          </div>
        </div>
        <div className="rounded-lg bg-white/10 p-4">
          <div className="mb-2 text-3xl">2️⃣</div>
          <div className="font-semibold">Order Food</div>
          <div className="mt-1 text-sm text-blue-100">
            Place your order and enjoy
          </div>
        </div>
        <div className="rounded-lg bg-white/10 p-4">
          <div className="mb-2 text-3xl">3️⃣</div>
          <div className="font-semibold">Use Ticket</div>
          <div className="mt-1 text-sm text-blue-100">
            Click "Use Ticket" at payment time
          </div>
        </div>
        <div className="rounded-lg bg-white/10 p-4">
          <div className="mb-2 text-3xl">4️⃣</div>
          <div className="font-semibold">Get Owner Password</div>
          <div className="mt-1 text-sm text-blue-100">
            Owner enters password to confirm
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
