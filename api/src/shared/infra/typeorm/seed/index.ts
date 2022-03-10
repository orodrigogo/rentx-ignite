import { v4 as uuidV4 } from "uuid";
import createConnection from "../index";

async function create() {
  const connection = await createConnection("localhost");  

  await connection.query(
    `
      DELETE FROM accessories;
      DELETE FROM photos;
    `
  );

  await connection.query(
    `
      INSERT INTO accessories (id, car_id, type, name) values 
      ('${uuidV4()}', '535e8de8-721b-4bac-8b72-7d29be7da467', 'speed', '250km/h'),
      ('${uuidV4()}', '535e8de8-721b-4bac-8b72-7d29be7da467', 'acceleration', '3.8s'),
      ('${uuidV4()}', '535e8de8-721b-4bac-8b72-7d29be7da467', 'turning_diameter', '800 HP'),
      ('${uuidV4()}', '535e8de8-721b-4bac-8b72-7d29be7da467', 'electric_motor', 'Elétrico'),
      ('${uuidV4()}', '535e8de8-721b-4bac-8b72-7d29be7da467', 'exchange', 'Auto'),
      ('${uuidV4()}', '535e8de8-721b-4bac-8b72-7d29be7da467', 'seats', '5 pessoas'),
      ('${uuidV4()}', 'ffb71f55-818a-48b1-b7d2-2efc406ede25', 'speed', '315km/h'),
      ('${uuidV4()}', 'ffb71f55-818a-48b1-b7d2-2efc406ede25', 'acceleration', '2.9s'),
      ('${uuidV4()}', 'ffb71f55-818a-48b1-b7d2-2efc406ede25', 'turning_diameter', '700 HP'),
      ('${uuidV4()}', 'ffb71f55-818a-48b1-b7d2-2efc406ede25', 'gasoline_motor', 'Gasoline'),
      ('${uuidV4()}', 'ffb71f55-818a-48b1-b7d2-2efc406ede25', 'exchange', 'Auto'),
      ('${uuidV4()}', 'ffb71f55-818a-48b1-b7d2-2efc406ede25', 'seats', '4 pessoas'),
      ('${uuidV4()}', '52930821-cbea-4b05-9f45-7c02b1bb0d8c', 'speed', '330km/h'),
      ('${uuidV4()}', '52930821-cbea-4b05-9f45-7c02b1bb0d8c', 'acceleration', '6.2s'),
      ('${uuidV4()}', '52930821-cbea-4b05-9f45-7c02b1bb0d8c', 'turning_diameter', '900 HP'),
      ('${uuidV4()}', '52930821-cbea-4b05-9f45-7c02b1bb0d8c', 'gasoline_motor', 'Gasoline'),
      ('${uuidV4()}', '52930821-cbea-4b05-9f45-7c02b1bb0d8c', 'exchange', 'Auto'),
      ('${uuidV4()}', '52930821-cbea-4b05-9f45-7c02b1bb0d8c', 'seats', '2 pessoas'),
      ('${uuidV4()}', '49983f6c-a46a-4dfd-a86e-425b8c72e086', 'speed', '380km/h'),
      ('${uuidV4()}', '49983f6c-a46a-4dfd-a86e-425b8c72e086', 'acceleration', '3.2s'),
      ('${uuidV4()}', '49983f6c-a46a-4dfd-a86e-425b8c72e086', 'turning_diameter', '800 HP'),
      ('${uuidV4()}', '49983f6c-a46a-4dfd-a86e-425b8c72e086', 'electric_motor', 'Elétrico'),
      ('${uuidV4()}', '49983f6c-a46a-4dfd-a86e-425b8c72e086', 'exchange', 'Auto'),
      ('${uuidV4()}', '49983f6c-a46a-4dfd-a86e-425b8c72e086', 'seats', '2 pessoas'),
      ('${uuidV4()}', '508e7193-0078-4615-9071-920b59038fda', 'speed', '180km/h'),
      ('${uuidV4()}', '508e7193-0078-4615-9071-920b59038fda', 'acceleration', '1.5s'),
      ('${uuidV4()}', '508e7193-0078-4615-9071-920b59038fda', 'turning_diameter', '600 HP'),
      ('${uuidV4()}', '508e7193-0078-4615-9071-920b59038fda', 'gasoline_motor', 'Gasolina'),
      ('${uuidV4()}', '508e7193-0078-4615-9071-920b59038fda', 'exchange', 'Auto'),
      ('${uuidV4()}', '508e7193-0078-4615-9071-920b59038fda', 'seats', '5 pessoas'),
      ('${uuidV4()}', '59626707-88c5-4877-9350-07f372c0905a', 'speed', '180km/h'),
      ('${uuidV4()}', '59626707-88c5-4877-9350-07f372c0905a', 'acceleration', '2.0s'),
      ('${uuidV4()}', '59626707-88c5-4877-9350-07f372c0905a', 'turning_diameter', '600 HP'),
      ('${uuidV4()}', '59626707-88c5-4877-9350-07f372c0905a', 'hybrid_motor', 'Híbrido'),
      ('${uuidV4()}', '59626707-88c5-4877-9350-07f372c0905a', 'exchange', 'Auto'),
      ('${uuidV4()}', '59626707-88c5-4877-9350-07f372c0905a', 'seats', '5 pessoas')      
    `
  );

  await connection.query(
    `
      INSERT INTO photos (id, car_id, photo) VALUES
      ('${uuidV4()}', '535e8de8-721b-4bac-8b72-7d29be7da467', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/1.png'),
      ('${uuidV4()}', '535e8de8-721b-4bac-8b72-7d29be7da467', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/2.png'),
      ('${uuidV4()}', '535e8de8-721b-4bac-8b72-7d29be7da467', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/3.png'),
      ('${uuidV4()}', 'ffb71f55-818a-48b1-b7d2-2efc406ede25', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/4.png'),
      ('${uuidV4()}', 'ffb71f55-818a-48b1-b7d2-2efc406ede25', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/5.png'),
      ('${uuidV4()}', '52930821-cbea-4b05-9f45-7c02b1bb0d8c', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/6.png'),
      ('${uuidV4()}', '52930821-cbea-4b05-9f45-7c02b1bb0d8c', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/7.png'),
      ('${uuidV4()}', '52930821-cbea-4b05-9f45-7c02b1bb0d8c', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/8.png'),
      ('${uuidV4()}', '49983f6c-a46a-4dfd-a86e-425b8c72e086', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/9.png'),
      ('${uuidV4()}', '49983f6c-a46a-4dfd-a86e-425b8c72e086', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/10.png'),
      ('${uuidV4()}', '49983f6c-a46a-4dfd-a86e-425b8c72e086', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/11.png'),
      ('${uuidV4()}', '508e7193-0078-4615-9071-920b59038fda', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/12.png'),
      ('${uuidV4()}', '508e7193-0078-4615-9071-920b59038fda', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/13.png'),
      ('${uuidV4()}', '508e7193-0078-4615-9071-920b59038fda', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/14.png'),
      ('${uuidV4()}', '59626707-88c5-4877-9350-07f372c0905a', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/15.png'),
      ('${uuidV4()}', '59626707-88c5-4877-9350-07f372c0905a', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/16.png'),
      ('${uuidV4()}', '59626707-88c5-4877-9350-07f372c0905a', 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/17.png');
    `
  );


  connection.close;
}

create().then(() => console.log("Seed created!"));
