import React, { useState } from "react";
import { useDeliveryVendors } from "../DeliveryVendorsProvider";
import output from "/files/output.json";
import { StyledPostaWidget } from "./postaWidgetStyle";

import Image from "next/image";
import { imageLoader } from "../../../imageLoader/imageLoader";

export const PostaWidget = ({ closeWidget }) => {
  const [pobocky, setPobocky] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);
  const { saveVendor } = useDeliveryVendors();

  const normalizeString = (str) => {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  };

  const handleSearch = () => {
    const normalizedSearchTerm = normalizeString(searchTerm);
    const filteredPobocky = output.filter((branch) => {
      const normalizedAddress = normalizeString(branch.ADRESA);
      const normalizedPSC = normalizeString(branch.PSC);
      return (
        normalizedAddress.includes(normalizedSearchTerm) ||
        normalizedPSC.includes(normalizedSearchTerm)
      );
    });
    setPobocky(filteredPobocky);
    setSearchPerformed(true);
  };

  const handleSelectBranch = (branch) => {
    saveVendor({
      vendorName: "Balík Na poštu",
      id: branch.PSC,
      name: branch.NAZ_PROV,
      branchCode: branch.PSC,
    });
    closeWidget();
  };

  return (
    <StyledPostaWidget>
      <h3>Nejbližší pobočky</h3>
      <Image
        loader={imageLoader}
        src={"/files/upload/cp.png"}
        alt={"postaLogo"}
        width={500}
        height={500}
        layout="intrinsic"
        className="posta-widget-logo"
      />
      <p>
        Zadejte ulici, název či PSČ obce, ve které si přejete zásilku
        vyzvednout.
      </p>
      <div className="inputGroup">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Hledat</button>
      </div>
      {pobocky.length > 0
        ? pobocky.map((pobocka, index) => (
            <div key={index} className="branch">
              <h4>{pobocka.NAZ_PROV}</h4>
              <p>{pobocka.ADRESA}</p>
              <p>PSC: {pobocka.PSC}</p>
              {pobocka.OTV_DOBA.map((day, idx) => (
                <p key={idx}>
                  {day.name}:{" "}
                  {day.od_do.length > 0 ? (
                    day.od_do.map((time, timeIdx) => (
                      <span key={timeIdx}>
                        {time.od} - {time.do}
                      </span>
                    ))
                  ) : (
                    <span className="closed">zavřeno</span>
                  )}
                </p>
              ))}

              <button onClick={() => handleSelectBranch(pobocka)}>
                Vybrat
              </button>
            </div>
          ))
        : searchPerformed && (
            <p className="no-results">Žádné pobočky nenalezeny</p>
          )}
    </StyledPostaWidget>
  );
};
