describe("API herokuapp automation", () => {
    let bookingIds = [];
    let authToken;
    let patchedRecord;  
    let beforedeleterecord;
    let deletedata;
    
    it("creating an auth token", () => {
        const data = {
            username: "admin",
            password: "password123",
        };

        cy.request({
            method: "POST",
            url: "https://restful-booker.herokuapp.com/auth",
            body: data,
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property("token");
            authToken = response.body.token;
            console.log("Fetched Token: ", authToken);
        });
    });

    it("Creating multiple bookings", function () {
        const bookings = [
            {
                firstname: "Angalya",
                lastname: "ThurandharaK",
                totalprice: 123,
                depositpaid: true,
                bookingdates: { checkin: "2018-02-03", checkout: "2019-02-04" },
                additionalneeds: "Breakfast",
            },
            {
                firstname: "Dhaksith",
                lastname: "Pandy",
                totalprice: 852,
                depositpaid: false,
                bookingdates: { checkin: "2020-05-01", checkout: "2020-05-05" },
                additionalneeds: "Lunch",
            },
            {
                firstname: "Aditi",
                lastname: "Rav",
                totalprice: 333,
                depositpaid: true,
                bookingdates: { checkin: "2021-09-01", checkout: "2021-09-10" },
                additionalneeds: "Dinner",
            },
            {
                firstname: "Ram",
                lastname: "Sita",
                totalprice: 199,
                depositpaid: true,
                bookingdates: { checkin: "2022-06-01", checkout: "2022-06-05" },
                additionalneeds: "Lunch",
            },
            {
                firstname: "Ajith",
                lastname: "Kumar",
                totalprice: 150,
                depositpaid: false,
                bookingdates: { checkin: "2023-01-10", checkout: "2023-01-15" },
                additionalneeds: "Breakfast",
            },
            {
                firstname: "Robin",
                lastname: "Sharma",
                totalprice: 350,
                depositpaid: true,
                bookingdates: { checkin: "2024-03-12", checkout: "2024-03-20" },
                additionalneeds: "Dinner",
            },
            {
                firstname: "Joseph",
                lastname: "Vijay",
                totalprice: 500,
                depositpaid: true,
                bookingdates: { checkin: "2025-02-15", checkout: "2025-02-20" },
                additionalneeds: "Dinner",
            },
            {
                firstname: "Arun",
                lastname: "Kumar",
                totalprice: 300,
                depositpaid: false,
                bookingdates: { checkin: "2026-05-10", checkout: "2026-05-14" },
                additionalneeds: "Lunch",
            },
            {
                firstname: "Ridhaan",
                lastname: "Mahith",
                totalprice: 250,
                depositpaid: true,
                bookingdates: { checkin: "2027-08-01", checkout: "2027-08-05" },
                additionalneeds: "Breakfast",
            },
            {
                firstname: "Varshith",
                lastname: "Aarya",
                totalprice: 420,
                depositpaid: false,
                bookingdates: { checkin: "2028-09-01", checkout: "2028-09-07" },
                additionalneeds: "Lunch",
            },
        ];

        bookings.forEach((bookingData) => {
            cy.request({
                method: "POST",
                url: "https://restful-booker.herokuapp.com/booking",
                body: bookingData,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
                },
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body).to.have.property("bookingid");
                bookingIds.push(response.body.bookingid);
                console.log(`Created booking with ID: ${response.body.bookingid}`);
            });
        });
    });

    it("booking details before updating", function () {
        if (bookingIds.length > 0) {
            bookingIds.forEach((bookingId) => {
                cy.request(
                    `GET`,
                    `https://restful-booker.herokuapp.com/booking/${bookingId}`
                ).then((response) => {
                    expect(response.status).to.equal(200);
                    expect(response.body).to.have.property("firstname");
                    expect(response.body).to.have.property("lastname");
                    expect(response.body).to.have.property("totalprice");
                    expect(response.body).to.have.property("depositpaid");
                    expect(response.body).to.have.property("bookingdates");
                    expect(response.body.bookingdates).to.have.property("checkin");
                    expect(response.body.bookingdates).to.have.property("checkout");
                    expect(response.body).to.have.property("additionalneeds");
                    console.log(`Details for booking ID ${bookingId}:`, response.body);
                });
            });
        } else {
            throw new Error("No booking IDs available to fetch details.");
        }
    });

    it("Update the first booking based on booking ID using PUT and validate the updated record", function () {
        const updatedData = {
            firstname: "Thomas",
            lastname: "Edison",
            totalprice: 111,
            depositpaid: true,
            bookingdates: {
                checkin: "2018-01-01",
                checkout: "2019-01-01",
            },
            additionalneeds: "Breakfast",
        };

        if (bookingIds.length > 0) {
            const bookingIdToUpdate = bookingIds[0];

            cy.request({
                method: "PUT",
                url: `https://restful-booker.herokuapp.com/booking/${bookingIdToUpdate}`,
                body: updatedData,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Cookie: `token=${authToken}`,
                },
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.firstname).to.equal(updatedData.firstname);
                expect(response.body.lastname).to.equal(updatedData.lastname);
                expect(response.body.totalprice).to.equal(updatedData.totalprice);
                expect(response.body.depositpaid).to.equal(updatedData.depositpaid);
                expect(response.body.bookingdates.checkin).to.equal(updatedData.bookingdates.checkin);
                expect(response.body.bookingdates.checkout).to.equal(updatedData.bookingdates.checkout);
                expect(response.body.additionalneeds).to.equal(updatedData.additionalneeds);
                console.log(`Updated booking with ID: ${bookingIdToUpdate}`);

                cy.request(
                    `GET`,
                    `https://restful-booker.herokuapp.com/booking/${bookingIdToUpdate}`
                ).then((getResponse) => {
                    expect(getResponse.status).to.equal(200);
                    expect(getResponse.body.firstname).to.equal(updatedData.firstname);
                    expect(getResponse.body.lastname).to.equal(updatedData.lastname);
                    expect(getResponse.body.totalprice).to.equal(updatedData.totalprice);
                    expect(getResponse.body.depositpaid).to.equal(updatedData.depositpaid);
                    expect(getResponse.body.bookingdates.checkin).to.equal(updatedData.bookingdates.checkin);
                    expect(getResponse.body.bookingdates.checkout).to.equal(updatedData.bookingdates.checkout);
                    expect(getResponse.body.additionalneeds).to.equal(updatedData.additionalneeds);
                    console.log(`Verified updated booking details for ID ${bookingIdToUpdate}:`, getResponse.body);
                });
            });
        } else {
            throw new Error("No booking IDs available to update.");
        }
    });

    it("get the 2nd record before partial update", () => {
        let beforePartialUpdatedValue = bookingIds[1];
        cy.request({
            method: `GET`,
            url: `https://restful-booker.herokuapp.com/booking/${beforePartialUpdatedValue}`
        }).then((response) => {
            expect(response.status).to.equal(200);
            console.log(`Details of 2nd record before patching ${beforePartialUpdatedValue}:`, response.body); 
        });
    });

    it("partial update of 2nd record", () => {
        const partial = {
            firstname: "Pratheepa",
            lastname: "K"
        };
    
        if (bookingIds.length > 0) {
            const bookingIdToUpdatePartial = bookingIds[1];
    
            cy.request({
                method: "PATCH",
                url: `https://restful-booker.herokuapp.com/booking/${bookingIdToUpdatePartial}`,
                body: partial,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Cookie: `token=${authToken}`,
                },
            }).then((response) => {
                expect(response.status).to.equal(200);
                patchedRecord = response.body; 
                console.log("Patched record:", patchedRecord);
            });
        }
    });
    
    it("get the patched record", () => {
        if (bookingIds.length > 1) {
            const bookingIdToFetch = bookingIds[1];
    
            cy.request({
                method: "GET",
                url: `https://restful-booker.herokuapp.com/booking/${bookingIdToFetch}`, 
            }).then((response) => {
                expect(response.status).to.equal(200);
                expect(response.body.firstname).to.equal("Pratheepa");
                expect(response.body.lastname).to.equal("K"); 
                console.log(`Fetched patched record for booking ID: ${bookingIdToFetch}`, response.body);
            });
        }
    });
    it("get the 3rd record before deleting", () => {
        let deletedata = bookingIds[2];  
    
        cy.request({
            method: "GET",
            url: `https://restful-booker.herokuapp.com/booking/${deletedata}`
        }).then((response) => {

            expect(response.status).to.equal(200);
    
            
             beforedeleterecord = response.body;
            console.log(beforedeleterecord);  
        });
    });
    it("delete the 3rd record with Basic Authentication", () => {
        let deletedata = bookingIds[2]; 
    
        cy.request({
            method: "DELETE",
            url: `https://restful-booker.herokuapp.com/booking/${deletedata}`,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=" 
            },
            failOnStatusCode: false  
        }).then((response) => {
            if (response.status === 403) {
                console.log("Forbidden: Insufficient permissions or invalid authentication");
            } else if (response.status === 204) {
                console.log("Record deleted successfully");
            } else {
                console.log("Unexpected response status:", response.status);
            }
        });
    });
    it("validate the record after deleting",()=>
    {
        cy.request({
            method: "GET",
            url: `https://restful-booker.herokuapp.com/booking/${deletedata}`,
            failOnStatusCode: false, 
        }).then((getResponse) => {
            
            expect(getResponse.status).to.equal(404)
            console.log("Successfully validated that the record is deleted.");
        });
    });
    it("get all the remaining records after deleting the 3rd record", () => {
    
        bookingIds.forEach((bookingId, index) => {
        
            if (index !== 2) {
                cy.request({
                    method: "GET",
                    url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
                }).then((response) => {
                    
                    expect(response.status).to.equal(200);
                    console.log(`Details for remaining booking ID ${bookingId}:`, response.body);
                });
            }
        });
    });
    
    
    });


    
    
      
    
   
