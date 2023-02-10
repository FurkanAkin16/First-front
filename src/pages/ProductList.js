import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

const TableExamplePagination = () => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Ad Soyad</Table.HeaderCell>
        <Table.HeaderCell>Şehir</Table.HeaderCell>
        <Table.HeaderCell>İş </Table.HeaderCell>
        <Table.HeaderCell>Maaş</Table.HeaderCell>
        <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Oğuzhan Carus</Label>
        </Table.Cell>
        <Table.Cell>Bursa</Table.Cell>
        <Table.Cell>Mak Müh</Table.Cell>
        <Table.Cell>15.000 Tl</Table.Cell>
        <Table.Cell>Ofis</Table.Cell>
        <Table.Cell>Makine Mühendisi</Table.Cell>
       
      </Table.Row>
      
     
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Seçkin Navruz</Label>
        </Table.Cell>
        <Table.Cell>Bursa</Table.Cell>
        <Table.Cell>Boyacı</Table.Cell>
        <Table.Cell>15.000 Tl</Table.Cell>
        <Table.Cell>Saha</Table.Cell>
        <Table.Cell>Amele</Table.Cell>
       
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>İnanç Seven</Label>
        </Table.Cell>
        <Table.Cell>Bursa</Table.Cell>
        <Table.Cell>Dolandırıcı</Table.Cell>
        <Table.Cell>45.000 Tl</Table.Cell>
        <Table.Cell>Uzaktan</Table.Cell>
        <Table.Cell>Uzman Scammer</Table.Cell>
       
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Furkan Akın</Label>
        </Table.Cell>
        <Table.Cell>Bursa</Table.Cell>
        <Table.Cell>Yazılım Geliştirici</Table.Cell>
        <Table.Cell>15.000 Tl</Table.Cell>
        <Table.Cell>Uzaktan</Table.Cell>
        <Table.Cell>Junior developer </Table.Cell>
       
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Aybüke Karaarslan</Label>
        </Table.Cell>
        <Table.Cell>Zonguldak</Table.Cell>
        <Table.Cell>Coğrafya Öğretmeni</Table.Cell>
        <Table.Cell>12.500 Tl</Table.Cell>
        <Table.Cell>Dershane</Table.Cell>
        <Table.Cell>Coğrafya Öğretmeni </Table.Cell>
       
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Furkan Yaşa</Label>
        </Table.Cell>
        <Table.Cell>Bursa</Table.Cell>
        <Table.Cell>Makine Bakım</Table.Cell>
        <Table.Cell>20.000 Tl</Table.Cell>
        <Table.Cell>Fabrika</Table.Cell>
        <Table.Cell>Uzman Bakımcı </Table.Cell>
       
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Yunus Emre Navruz</Label>
        </Table.Cell>
        <Table.Cell>Bursa</Table.Cell>
        <Table.Cell>Boyacı</Table.Cell>
        <Table.Cell>15.000 Tl</Table.Cell>
        <Table.Cell>Saha</Table.Cell>
        <Table.Cell>Amele </Table.Cell>
       
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='5'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a'>5</Menu.Item>
            <Menu.Item as='a'>6</Menu.Item>
            <Menu.Item as='a'>7</Menu.Item>
            <Menu.Item as='a'>8</Menu.Item>
            <Menu.Item as='a'>9</Menu.Item>
            <Menu.Item as='a'>10</Menu.Item>

            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default TableExamplePagination
