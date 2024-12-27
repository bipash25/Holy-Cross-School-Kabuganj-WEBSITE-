import React from "react";
import Page from "@/components/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const feeStructure = [
  {
    class: "Nursery - KG",
    admission: "5,000",
    monthly: "2,000",
    term: "6,000",
    annual: "10,000",
  },
  {
    class: "Class I - V",
    admission: "8,000",
    monthly: "2,500",
    term: "7,500",
    annual: "12,000",
  },
  {
    class: "Class VI - VIII",
    admission: "10,000",
    monthly: "3,000",
    term: "9,000",
    annual: "15,000",
  },
  {
    class: "Class IX - X",
    admission: "12,000",
    monthly: "3,500",
    term: "10,500",
    annual: "18,000",
  },
];

const Fees = () => {
  return (
    <Page
      title="School Fees"
      description="Fee structure for the academic year 2024-25"
    >
      <div className="max-w-5xl mx-auto space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Fee Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Class</TableHead>
                  <TableHead>Admission Fee</TableHead>
                  <TableHead>Monthly Fee</TableHead>
                  <TableHead>Term Fee</TableHead>
                  <TableHead>Annual Fee</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {feeStructure.map((fee) => (
                  <TableRow key={fee.class}>
                    <TableCell className="font-medium">{fee.class}</TableCell>
                    <TableCell>₹{fee.admission}</TableCell>
                    <TableCell>₹{fee.monthly}</TableCell>
                    <TableCell>₹{fee.term}</TableCell>
                    <TableCell>₹{fee.annual}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Payment Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Fees must be paid by the 10th of each month</li>
                <li>• Term fees are collected thrice a year</li>
                <li>
                  • Annual fees are payable at the beginning of the session
                </li>
                <li>• Late payment will incur additional charges</li>
                <li>• All fees are non-refundable</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Online payment through school portal</li>
                <li>• Bank transfer to school account</li>
                <li>• Cheque payment at school office</li>
                <li>• Cash payment at school counter</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">
              Note: The school reserves the right to revise the fee structure.
              Any changes will be communicated to parents well in advance.
            </p>
          </CardContent>
        </Card>
      </div>
    </Page>
  );
};

export default Fees;
