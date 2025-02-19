import React, { useEffect } from 'react';

const SetCookies: React.FC = () => {
  useEffect(() => {
    document.cookie =
      '__cf_bm=valor; SameSite=None; Secure; Path=/; Partitioned';
    document.cookie =
      '_cfuvid=valor; SameSite=None; Secure; Path=/; Partitioned';
  }, []);

  return null;
};

export default SetCookies;
