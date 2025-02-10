import request, { gql } from "graphql-request"

const MASTER_URL="https://ap-south-1.cdn.hygraph.com/content/cm6sd7w1j005i07uqeg2tf4ce/master"

const API_TOKEN="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MzkwODYwMDIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1zb3V0aC0xLmh5Z3JhcGguY29tL3YyL2NtNnNkN3cxajAwNWkwN3VxZWcydGY0Y2UvbWFzdGVyIiwibWFuYWdlbWVudC1uZXh0LmdyYXBoY21zLmNvbSJdLCJpc3MiOiJodHRwczovL21hbmFnZW1lbnQtYXAtc291dGgtMS5oeWdyYXBoLmNvbS8iLCJzdWIiOiJiOTY3YzQ4OC1kZjk5LTQxYTctOTllMy0xZjNjODYzNDIzODAiLCJqdGkiOiJjbTZ4YXdqcHAwaXJsMDdwbWM4Zzg4MmtjIn0.uEDLr5BAvlRp0WXs8iZ3Vx0T-dOo5s0elmQ76ibOYV4KDHRD_cHAPdIh009cs5X0yYQZrvvne0iH_NOF2rKYxSVgGD_0iT7cwcPR6MgZmsPxV5sRSgih9DUU7f6aiA1sFPoM3XbxC3_Yolp33x90c0_lCoHKdPIWoMtJCWxO01EZWPCfGIpS1nVrBgZ-N04DoJG_cXwIx6ZSoDoK36MRMbofWyKhSEW-VgSkPYT-aP1ZMnQaHf7MnIv0q08GpOcCVlDmLi5UcrxA3DZ8guRJLnNTPvA9LzLL96N2mGvKIlvpGT408YpO9r0qJGMlRzfDbxj6mImWMwsz2mvs_VOs_sM3G6VwvhTlRHk5HOGL996nSrtWNa6vIG0VHfExMVf8Y0LocwZYt0VS-2Mfjmhlyt3-sRU0-xxb4UiKxKyqBiUbhOdjDj4FFfsS11RotzykqG6A2LhKb8uFVTRsWfMTOdGckw9A2o-tFP5FuYJiamtjYv_5KfLKKn49Qbpg4P4-f6Ciq8Ss_bVf6kxx6j4-f_tLgjnnCzQE1a5u08NKc4aQkHX6G-YMSusHVIr79VKyRjGC_gkt06-7KZCNIz3zdXffh4mM1B0uZxWHCsSLKLRekFiZctHdv_dpB8JHyY_V5oNPxJAS0zmRu2zT2yF2XfK-YPLz_ozQ5Pa77X1_7XY";

export const getCarsList=async()=>{
    const query=gql`
    query MyQuery {
  carLists {
    carAvg
    createdAt
    id
    name
    price
    publishedAt
    updatedAt
    image {
      url
    }
      carType
      carBrand
  }
}`
   const result = await request(MASTER_URL,query)
   return result;
}

export const getStoreLocations=async()=>{
  const query=gql`
  query MyQuery {
  storesLocations {
    address
  }
}
  `
  const result = await request(MASTER_URL,query)
  return result;
}


export const createBooking = async (formValue: any) => {
  const mutationQuery = gql`
    mutation MyMutation {
      createBooking(
        data: {carList: {connect: {id: "${formValue.carList}"}}, 
          dropOffTime: "${formValue.dropOffTime}", 
          pickUpDate: "${formValue.pickUpDate}", 
          pickUpTime: "${formValue.pickUpTime}", 
          userName: "${formValue.userName}", 
          dropOffDate: "${formValue.dropOffDate}", 
          contactNumber: "${formValue.contactNumber}"}
      ) {
        id
      }
    }
  `;

  const headers = {
    Authorization: `Bearer ${API_TOKEN}`,
  };

  try {
    const result = await request(MASTER_URL, mutationQuery, {}, headers);
    return result;
  } catch (error) {
    console.error("Error in createBooking:", error);
    throw error;
  }
};