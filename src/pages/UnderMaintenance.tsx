
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const UnderMaintenance: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full text-center">
        <div className="mb-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/00f3918735164546ac5c37075df506a7/f46602e339319d01945cfcc0f98e3b45142d5fcd"
            alt="Snappies Logo"
            className="h-20 mx-auto mb-8"
          />
        </div>
        
        <div className="bg-[#F7FDFA] rounded-xl p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-[#13AB78] mb-4">Under Development</h1>
          
          <div className="bg-yellow-100 rounded-lg p-4 mb-6">
            <p className="text-gray-700 mb-2 font-medium">
              We're working hard to bring you this feature!
            </p>
            <p className="text-gray-600 text-sm">
              This section is currently under construction and will be available soon.
            </p>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-600 mb-4">
              Thank you for your patience while we build something amazing.
            </p>
            <p className="text-gray-600 text-sm">
              Meanwhile, you can return to the homepage to explore other sections.
            </p>
          </div>
          
          <Button
            onClick={() => navigate("/")}
            variant="default"
            className="bg-[#13AB78] hover:bg-[#0e8c63] px-6 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UnderMaintenance;
