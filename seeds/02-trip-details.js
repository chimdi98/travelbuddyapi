/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

export const seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('details').del();
  await knex('details').insert([
    
      {
        trip_id: "1",
        origin: "London, UK",
        destination: "New York, USA",
        departure_date: "2024-06-15",
        return_date: "2024-06-22",
        airline: "British Airways",
        price: "900.00",
        travellers: "3",
        image : "http://localhost:8080/New-York.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        trip_id: "2",
        origin: "Tokyo, Japan",
        destination: "Sydney, Australia",
        departure_date: "2024-07-10",
        return_date: "2024-07-17",
        airline: "Qantas",
        price: "1200.00",
        travellers: "1",
        image : "http://localhost:8080/Australia.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        trip_id: "3",
        origin: "Los Angeles, USA",
        destination: "Paris, France",
        departure_date: "2024-08-05",
        return_date: "2024-08-12",
        airline: "Air France",
        price: "1100.00",
        travellers: "2",
        image : "http://localhost:8080/Paris.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        trip_id: "4",
        origin: "Los Angeles, USA",
        destination: "Tokyo, Japan",
        departure_date: "2024-08-05",
        return_date: "2024-08-12",
        airline: "Delta",
        price: "1000.00",
        travellers: "1",
        image : "http://localhost:8080/Tokyo.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        trip_id: "5",
        origin: "Los Angeles, USA",
        destination: "Zanzibar, Tanzania",
        departure_date: "2024-08-05",
        return_date: "2024-08-12",
        airline: "Delta",
        price: "1500.00",
        travellers: "0",
        image : "http://localhost:8080/Zanzibar.jpg",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        trip_id: "6",
        origin: "Paris, France",
        destination: "Johaneseburg, South Africa",
        departure_date: "2024-08-05",
        return_date: "2024-08-12",
        airline: "Air France",
        price: "1300.00",
        travellers: "2",
        image : "http://localhost:8080/South-africa.jpg",
        created_at: new Date(),
        updated_at: new Date()
      }

  
  ])
}
    
