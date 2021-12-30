import React from 'react';

function App() {
  const [formValues, setFormValues] = React.useState({
    firstName: '',
    lastName: '',
    age: '',
    description: '',
    marital_status: '',
    fruits: [],
    hobbies: {
      movies: false,
      eating: false,
      chess: false,
      travelling: false,
      carrom: false,
    },
    gender: '',
    single_file: [],
    multiple_files: [],
    image_file: [],
    image_files: [],
    video_file: [],
    video_files: [],
  });
  console.log('formValues: ', formValues);
  const handleChange = (event) => {
    setFormValues((fV) => {
      return { ...fV, [event.target.name]: event.target.value };
    });
  };

  const handleHobbiesCheckbox = (e) => {
    console.log('e is ', e); // e.target.checked
    setFormValues((fV) => {
      return {
        ...fV,
        hobbies: { ...fV.hobbies, [e.target.name]: e.target.checked },
      };
    });
  };

  const handleSubmit = (event) => {
    console.log('event is ', event);
    event.preventDefault(); // it will not refresh the page
    console.log('formValues: ', formValues);

    // submit this formValues to the database.
  };

  return (
    <div>
      <h1>My App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <strong>First Name: </strong> <br /> <br />
          <input
            type='text'
            name='firstName'
            value={formValues.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <strong>Last Name: </strong> <br /> <br />
          <input
            type='text'
            name='lastName'
            value={formValues.lastName}
            onChange={handleChange}
          />
        </div>
        <div>
          <strong>Age: </strong> <br /> <br />
          <input
            type='text'
            name='age'
            value={formValues.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <strong>Description: </strong> <br /> <br />
          <textarea
            name='description'
            value={formValues.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <strong>Marital Status: </strong> <br /> <br />
          <select
            value={formValues.marital_status}
            onChange={handleChange}
            name='marital_status'
          >
            <option value=''>Select</option>
            <option value='married'>Married</option>
            <option value='single'>Single</option>
            <option value='divorced'>Divorced</option>
            <option value='widow'>Widow</option>
          </select>
        </div>
        <div>
          <strong>Fruits: </strong> <br /> <br />
          <select
            name='fruits'
            onChange={(e) => {
              const selOptions = Array.from(e.target.selectedOptions, (rec) => {
                return rec.value;
              });
              setFormValues((fV) => {
                return { ...fV, [e.target.name]: selOptions };
              });
            }}
            multiple={true}
          >
            <option value=''>Select</option>
            <option value='mango'>Mango</option>
            <option value='lime'>Lime</option>
            <option value='grapefruit'>Grapefruit</option>
            <option value='cocunut'>Coconut</option>
          </select>
        </div>
        <div>
          <h3>Hobbies</h3>
          <input
            type='checkbox'
            name='movies'
            checked={formValues.hobbies.movies}
            onChange={handleHobbiesCheckbox}
          />{' '}
          Movies
          <input
            type='checkbox'
            name='travelling'
            checked={formValues.hobbies.travelling}
            onChange={handleHobbiesCheckbox}
          />{' '}
          Travelling
          <input
            type='checkbox'
            name='eating'
            checked={formValues.hobbies.eating}
            onChange={handleHobbiesCheckbox}
          />{' '}
          Eating out
          <input
            type='checkbox'
            name='chess'
            checked={formValues.hobbies.chess}
            onChange={handleHobbiesCheckbox}
          />{' '}
          Chess
          <input
            type='checkbox'
            name='carrom'
            checked={formValues.hobbies.carrom}
            onChange={handleHobbiesCheckbox}
          />{' '}
          Carrom
        </div>
        <div>
          <h3>Gender</h3>
          <div>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={formValues.gender === 'male'}
              onChange={handleChange}
            />{' '}
            Male
            <input
              type='radio'
              name='gender'
              value='female'
              checked={formValues.gender === 'female'}
              onChange={handleChange}
            />{' '}
            Female
            <input
              type='radio'
              name='gender'
              value='other'
              checked={formValues.gender === 'other'}
              onChange={handleChange}
            />{' '}
            Other
          </div>
        </div>
        <div>
          <h3>File System</h3>
          <h4>Single File</h4>
          <input
            type='file'
            name='single_file'
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setFormValues((fV) => {
                return { ...fV, single_file: files };
              });
            }}
          />
          <h4>Multiple File</h4>
          <input
            type='file'
            name='multiple_files'
            multiple={true}
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setFormValues((fV) => {
                return { ...fV, multiple_files: files };
              });
            }}
          />
        </div>

        <div>
          <h3>Image File System</h3>
          <h4>Image Single File</h4>
          <input
            type='file'
            name='image_file'
            accept='image/*'
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setFormValues((fV) => {
                return { ...fV, image_file: files };
              });
            }}
          />
          <h4>Image Multiple File</h4>
          <input
            type='file'
            name='image_files'
            multiple={true}
            accept='image/*'
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setFormValues((fV) => {
                return { ...fV, image_files: files };
              });
            }}
          />
        </div>

        <div>
          <h3>Video File System</h3>
          <h4>Video Single File</h4>
          <input
            type='file'
            name='video_file'
            accept='video/*'
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setFormValues((fV) => {
                return { ...fV, video_file: files };
              });
            }}
          />
          <h4>Video Multiple File</h4>
          <input
            type='file'
            name='video_files'
            multiple={true}
            accept='video/*'
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setFormValues((fV) => {
                return { ...fV, video_files: files };
              });
            }}
          />
        </div>
        <div>
          {' '}
          <br />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;