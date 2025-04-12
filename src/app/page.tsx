import Button from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, QrCode } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <div>
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Digital Health Card</CardTitle>
          <CardDescription>
            Your government-issued digital health card for subsidized medicines.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-lg p-4 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-xs text-emerald-100">
                  Government of Bangladesh
                </p>
                <h3 className="font-bold text-lg">Digital Health Card</h3>
              </div>
              <div className="bg-white p-1 rounded">
                <QrCode className="h-6 w-6 text-emerald-600" />
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-emerald-100">Card Holder</p>
                <p className="font-medium">Abdullah Rahman</p>
              </div>
              <div>
                <p className="text-xs text-emerald-100">Card Number</p>
                <p className="font-medium">GHC-1234-5678-9012</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-xs text-emerald-100">Issue Date</p>
                  <p className="font-medium">01/01/2025</p>
                </div>
                <div>
                  <p className="text-xs text-emerald-100">Valid Until</p>
                  <p className="font-medium">31/12/2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" /> Download
            </Button>
            <Button size="sm">View Details</Button>
          </div>

          <div className="bg-slate-50 p-3 rounded-lg">
            <p className="text-sm text-slate-600">
              Present this card at any government pharmacy to purchase medicines
              at subsidized rates.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
