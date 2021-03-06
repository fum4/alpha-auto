import React, { useState, useEffect, useRef } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import classnames from "classnames";

import "./style.css";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
}

const ServicesSectionMobile = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [isRunning, setIsRunning] = useState(true);
  const [transitionIndex, setTransitionIndex] = useState(2);

  useInterval(
    () => {
      if (transitionIndex <= 6) {
        setActiveTab(transitionIndex.toString());
        setTransitionIndex(transitionIndex + 1);
      } else {
        setActiveTab("1");
        setTransitionIndex(2);
      }
    },
    isRunning ? 2000 : null
  );

  const toggle = (tab) => {
    setIsRunning(false);

    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div id="services-mobile" className="mobile-only pricing-section">
      <div className="container">
        <div className="col-12">
          <div className="section-title-s2 text-center">
            <span>Alpha Auto</span>
            <h2>Servicii</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tabs-site-button">
              <Nav tabs>
                <NavItem className="pricing-content-1">
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    <BeenhereIcon style={{ fontSize: 40 }} />
                  </NavLink>
                </NavItem>
                <NavItem className="pricing-content-2">
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    <i className="fi flaticon-system"></i>
                  </NavLink>
                </NavItem>
                <NavItem className="pricing-content-3">
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                    <i className="fi flaticon-brake"></i>
                  </NavLink>
                </NavItem>
                <NavItem className="pricing-content-4">
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => {
                      toggle("4");
                    }}
                  >
                    <i className="fi flaticon-check"></i>
                  </NavLink>
                </NavItem>
                <NavItem className="pricing-content-5">
                  <NavLink
                    className={classnames({ active: activeTab === "5" })}
                    onClick={() => {
                      toggle("5");
                    }}
                  >
                    <i className="fi flaticon-battery"></i>
                  </NavLink>
                </NavItem>
                <NavItem className="pricing-content-6">
                  <NavLink
                    className={classnames({ active: activeTab === "6" })}
                    onClick={() => {
                      toggle("6");
                    }}
                  >
                    <i className="fi flaticon-spray-gun"></i>
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div className="pricing-text">
                    <h4>Revizie</h4>
                    <p>
                      Revizia auto este un serviciu obligatoriu, care trebuie
                      efectuat regulat, uneori chiar mai des dec??t este
                      specificat de c??tre produc??tor. C??nd spunem revizie, ne
                      referim la verificarea, reglarea ??i/sau schimbarea
                      pieselor ??i aparatajelor acestea adesea const??nd ??n:
                      schimbarea filtrelor de ulei, aer, habitaclu, inspec??ia
                      nivelelor lichidelor, verificarea pl??cu??elor de fr??n??,
                      ??nl??turarea jocurilor survenite prin uzur??, etc.
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="pricing-text-1">
                    <h4>Mecanic??</h4>
                    <p>
                      Ma??ina este un ansamblu de mii de piese care, ??n mod
                      normal, se completeaz?? perfect ??i ??i ofer?? utilizatorului
                      libertate de mi??care. Din p??cate, piesele auto nu sunt
                      nemuritoare ??i ocazional, o parte dintre ele cedeaz??,fiind
                      necesar?? repararea autovehiculelor, astfel
                      ??nc??t acestea s??-??i men??in?? parametrii constructivi ??i
                      func??ionali ??i s?? se ??ncadreze ??n normele tehnice.
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="3">
                  <div className="pricing-text-2">
                    <h4>Direc??ia ??i fr??narea</h4>
                    <p>
                      Direc??ia ??i fr??narea sunt dou?? sisteme ale unui autoturism
                      ce trebuie s?? func??ioneze irepro??abil. De la fr??n?? pe disc
                      ??i cea de m??n?? la fr??n?? hidraulic?? ??i sistemul antiblocare
                      ro??i (ABS), speciali??tii no??tri ??tiu totul despre sistemul
                      de fr??nare, oferind repara??ii pentru orice ma??in??
                      indiferent de model, fabricant sau an de fabrica??ie.
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="4">
                  <div className="pricing-text-3">
                    <h4>Diagnoz?? computerizat??</h4>
                    <p>
                      Diagnoza reprezint?? verificarea computerizat?? a
                      condi??iilor tehnice generale ale unui autoturism (folosind
                      sisteme computerizate ??i interfe??e specifice fiec??rui tip
                      de automobil), inclusiv verificarea parametrilor reali cu
                      cei teoretici ??i identificarea cauzelor ??i localiz??rii
                      oric??rei defec??iuni, pentru a le elimina rapid.
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="5">
                  <div className="pricing-text-4">
                    <h4>Electric??</h4>
                    <p>
                      Instala??iile electrice ale autovehiculelor sunt complexe
                      ??i sus??in multe dintre sistemele vitale pentru
                      func??ionarea normal?? a ma??inii. De la pornire ??i fr??nare
                      p??n?? la deschiderea unui geam, sistemul electric este
                      utilizat continuu ??n timpul mersului ??i ??n timpul
                      sta??ion??rii.
                    </p>
                  </div>
                </TabPane>
                <TabPane tabId="6">
                  <div className="pricing-text-5">
                    <h4>Vopsitorie & tinichigerie</h4>
                    <p>
                      Cabina de vopsit este profesional?? ??i de ultim?? genera??ie,
                      asigur??ndu-ne speciali??tii c?? vor ob??ine exact rezultatul
                      dorit, iar atelierul de tinichigerie dispune de toate
                      mijloacele tehnice necesare ??ndrept??rii elementelor de
                      caroserie ??i interven??iei pe structura de rezisten????,
                      realiz??ndu-se ??ntr-un spa??iu adecvat ??i cu o dotare
                      corespunz??toare.
                    </p>
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSectionMobile;
