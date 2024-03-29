import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from "react-native";

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("tarefas.db");


const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);


  const createTables = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        [],
        (sqlTxn, res) => {
          console.log("Tabela criada com sucesso!");
        },
        error => {
          console.log("error on creating table " + error.message);
        },
      );
    });
  };


  const incluirTarefa = () => {
    if (!tarefa) {
      alert("Informe uma tarefa");
      return false;
    }


    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        error => {
          console.log("Erro ao inserir uma Tarefa " + error.message);
        },
      );
    });
  };


  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;


          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }


            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };

  const excluirTarefa = (id) => {
    db.transaction(txn => {
      txn.executeSql(
        `DELETE FROM tarefas WHERE id = ?`,
        [id],
        (sqlTxn, res) => {
          console.log(`${tarefa} Tarefa excluída com sucesso!`);
          getTarefas();
        },
        error => {
          console.log("Erro ao excluir uma Tarefa " + error.message);
        },
      );
    });
  }


  const renderTarefa = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <Text style={{ marginRight: 9 }}>{item.id}</Text>
        <Text>{item.nome}</Text>
        <TouchableOpacity onPress={() => excluirTarefa(item.id)}>
          <Text style={styles.botao}>Excluir</Text>
        </TouchableOpacity>
      </View>
    );
  };


  useEffect(async () => {
    await createTables();
    await getTarefas();
  }, []);


  return (
    <View>
      <StatusBar backgroundColor="#222" />


      <TextInput
        placeholder="Informe uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={{ marginHorizontal: 8, marginTop: 50 }}
      />


      <Button title="Salvar" onPress={incluirTarefa} />


      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
        key={t => t.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  botao:{
    backgroundColor: '#222',
    color: '#FFF',
    height: 30,
    padding: 5,
    marginLeft: 4,
  }
});


export default App;
