import React, { useEffect, useState } from "react";
import { Tree } from "antd";

const formatTreeData = data => {
  const list = [];
};

const EditableTree = props => {
  const { treeData, fieldNames, ...rest } = props;
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    const _data = JSON.parse(JSON.stringify(treeData));
    setDisplayData(_data);
  }, [treeData]);

  return <Tree {...rest} treeData={displayData}></Tree>;
};

export default EditableTree;
