import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone } from "lucide-react";

const phones = [
  {
    id: 1,
    name: "iPhone 13",
    specs: "6.1\" display, A15 Bionic chip, Dual camera",
    image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 2,
    name: "Samsung Galaxy S21",
    specs: "6.2\" display, Exynos 2100, Triple camera",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 3,
    name: "Google Pixel 6",
    specs: "6.4\" display, Google Tensor, Dual camera",
    image: "https://images.unsplash.com/photo-1635870723802-e88d76ae3252?auto=format&fit=crop&q=80&w=300&h=300"
  },
  {
    id: 4,
    name: "OnePlus 9",
    specs: "6.55\" display, Snapdragon 888, Triple camera",
    image: "https://images.unsplash.com/photo-1636034839021-3e6b95076b40?auto=format&fit=crop&q=80&w=300&h=300"
  }
];

const Index = () => {
  const [selectedPhone, setSelectedPhone] = useState(null);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Mobile Phone Order</h1>
      
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="Enter your phone number" />
              </div>
              <div>
                <Label htmlFor="location">Work Location</Label>
                <Input id="location" placeholder="Enter your work location" />
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Select a Phone</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {phones.map((phone) => (
                <Card 
                  key={phone.id} 
                  className={`cursor-pointer transition-all ${selectedPhone === phone.id ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setSelectedPhone(phone.id)}
                >
                  <CardContent className="p-4">
                    <img src={phone.image} alt={phone.name} className="w-full h-40 object-cover mb-4 rounded" />
                    <h3 className="font-bold">{phone.name}</h3>
                    <p className="text-sm text-gray-600">{phone.specs}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" disabled={!selectedPhone}>
              <Smartphone className="mr-2 h-4 w-4" /> Order Selected Phone
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Index;
