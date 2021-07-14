import md5 from 'md5';

const gravatar = (email) => {
  const hash = md5(email.trim().toLowerCase(), { encoding: 'binary' });
  return `https://gravatar.com/avatar/${hash}`;
};


export default gravatar;
