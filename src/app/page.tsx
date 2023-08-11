'use client'
import React, { useEffect } from 'react';
import JSONInput from 'react-json-editor-ajrm';
// import locale    from 'react-json-editor-ajrm/locale/en';

export default function JsonEditor () {

  function getData () {
    fetch(`/api/videos`, { method: 'GET', cache: "no-cache" }).then(res => { return res.json() }).then(res => {
      setJson(res.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])
  const [json, setJson] = React.useState({});

  function handleEdit (data:any) {
    // 更新JSON数据
    setJson(data.jsObject);
    fetch(`/api/videos`, { method: 'POST', cache: "no-cache", body: JSON.stringify(data.jsObject) })
  }

  return (
    <div>
      <JSONInput
        id          = 'a_unique_id'
        placeholder = { json }
        // locale      = { locale }
        height      = '100vh'
        width       = '100vw'
        onChange={handleEdit}
    />
    </div>
  );
}
