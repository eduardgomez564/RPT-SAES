"use client";
import { useState } from "react";
import UtilityButton from "@/components/Common/Buttons/UtilityButton";
import DangerButton from "@/components/Common/Buttons/DangerButton";
import SecondaryHeader from "@/components/Common/Texts/SecondaryHeader";
import TertiaryHeader from "@/components/Common/Texts/TertiaryHeader";
import TableList from "@/components/Common/Tables/TableList";

export default function ParagraphTab() {
  const [materials, setMaterials] = useState<any[]>([]);

  const handleDelete = (id: number) => {
    setMaterials(materials.filter((m) => m.id !== id));
  };

  const handleDeleteAll = () => {
    setMaterials([]);
  };

  return (
    <div>
      <SecondaryHeader title="Paragraph Materials" />
      <div
        className="
        /* Mobile */
        flex flex-row justify-between items-center mb-4
        /* Tablet */
        sm:mb-6
        /* Desktop */
        md:mb-2
      "
      >
        <TertiaryHeader title={`Total: ${materials.length}`} />
        <div className="flex gap-2">
          {materials.length > 0 && (
            <DangerButton small onClick={handleDeleteAll}>
              Delete All
            </DangerButton>
          )}
        </div>
      </div>
      <TableList
        columns={[
          { key: "no", title: "No#" },
          { key: "title", title: "Title" },
          { key: "phonemic", title: "Phonemic" },
          { key: "dateToUse", title: "Date to use" },
          { key: "status", title: "Status" },
        ]}
        data={materials.map((material, idx) => ({
          ...material,
          no: idx + 1,
        }))}
        actions={(row: any) => (
          <>
            <UtilityButton small>See All</UtilityButton>
            <DangerButton small onClick={() => handleDelete(row.id)}>
              Delete
            </DangerButton>
          </>
        )}
        pageSize={10}
      />
    </div>
  );
}


