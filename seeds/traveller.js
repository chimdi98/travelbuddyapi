/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('traveller').del()
  await knex('traveller').insert([
    
      {
        trip_id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        destination: "New York, USA"
      },
      {
        trip_id: 1,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        destination: "New York, USA"
      },
      {
        trip_id: 1,
        firstName: "Michael",
        lastName: "Johnson",
        email: "michael.johnson@example.com",
        destination: "New York, USA"
      },
      {
        trip_id: 2,
        firstName: "Emily",
        lastName: "Brown",
        email: "emily.brown@example.com",
        destination: "Sydney, Australia"
      },
      {
        trip_id: 3,
        firstName: "David",
        lastName: "Wilson",
        email: "david.wilson@example.com",
        destination: "Paris, France"
      },   
      {
        trip_id: 3,
        firstName: "Jany",
        lastName: "Smith",
        email: "jany.smith@example.com",
        destination: "Paris, France"
      },
      {
        trip_id: 4,
        firstName: "Michaele",
        lastName: "Johnson",
        email: "michaele.johnson@example.com",
        destination: "Tokyo, Japan"
      },
      {
        trip_id: 6,
        firstName: "Emilia",
        lastName: "Brown",
        email: "emilia.brown@example.com",
        destination: "Johaneseburg, South Africa"
      },
      {
        trip_id: 6,
        firstName: "Davidson",
        lastName: "Wilson",
        email: "davidson.wilson@example.com",
        destination: "Johaneseburg, South Africa"
      },  
    
    
  ]);
};
