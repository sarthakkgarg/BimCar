import * as React from "react";


export default function drawer() {
 
  return (
    <>
    <div id="sidebarMenu" class="sidebar">
        <div>
            <div >
                <div style={{ display:"flex", flexDirection:"column", marginTop:"20px"}}>
                    <label>Select Location</label>
                    <select >
                        <option value="" disabled selected hidden>Select Location</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Noida">Noida</option>
                    </select>
                </div>

                <div style={{ display:"flex", flexDirection:"column"}} >
                    <label >Sort By</label>
                    <select >
                        <option value="" disabled selected hidden>Sort By</option>
                        <option value="RecentlyAdded">Recently Added</option>
                        <option value="priceLowToHigh">Price - Low to High</option>
                        <option value="priceHighToLow">Price- High to Low</option>
                    </select>
                </div>

                <div >
                    <label for="customRange1">Monthly
                        Subscription</label>
                    <div >
                        <input type="range" class="form-range" min="5000" max="100000"  />
                    </div>
                    <p >
                        <span >Under Rs. 30000</span>
                    </p>
                </div>

                <div >
                    <div >
                        <div  >
                            <button  type="button" data-mdb-toggle="collapse"
                                data-mdb-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Body Type
                            </button>
                        </div>
                        <div  aria-labelledby="headingOne"
                            data-mdb-parent="#filterAccordion">
                            <div >
                                <div >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>

                                <div  >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>

                                <div  >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div   id="headingTwo">
                            <button   type="button"
                                data-mdb-toggle="collapse" data-mdb-target="#collapseTwo" aria-expanded="false"
                                aria-controls="collapseTwo">
                                Transmission
                            </button>
                        </div>
                        <div id="collapseTwo"    aria-labelledby="headingTwo"
                            data-mdb-parent="#filterAccordion">
                            <div    >
                                <div    >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>

                                <div    >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>

                                <div    >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div  >
                            <button   type="button"
                                data-mdb-toggle="collapse" data-mdb-target="#collapseThree" aria-expanded="false"
                                aria-controls="collapseThree">
                                Brand
                            </button>
                        </div>
                        <div    data-mdb-parent="#filterAccordion">
                            <div    >
                                <div    >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>

                                <div    >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>

                                <div    >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  >
                        <div    >
                            <button   type="button"
                                data-mdb-toggle="collapse" data-mdb-target="#collapseFour" aria-expanded="false"
                                aria-controls="collapseThree">
                                Vehicle
                            </button>
                        </div>
                        <div     data-mdb-parent="#filterAccordion">
                            <div    >
                                <div    >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>

                                <div    >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>

                                <div >
                                    <input   type="checkbox" value=""
                                        id="flexCheckDefault" />
                                    <label    >Default checkbox</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </>
   
  );
}
