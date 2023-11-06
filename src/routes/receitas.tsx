import { Input } from "components/common/Input";
import { Layout } from "components/common/Layout";
import {
  FiveColumnInputs,
  FormArea,
  ThreeColumnInputs,
  ThreeColumnInputsFlex,
  TwoColumnInputs,
} from "styles/Form";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormContainerArea } from "styles/ReceitaForm";
import { useClientService } from "app/services";
import { Client } from "app/models/clients";
import { Select } from "components/common/Select";
import { useReceitaService } from "app/services/receita.service";
import alertify from "alertifyjs";
import { Receita } from "app/models/receitas";

export const Receitas: React.FC = () => {
  alertify.set("notifier", "position", "top-right");
  const service = useReceitaService();
  const userAuthId = localStorage.getItem("userAuthId");
  const [dropClientList, setDropClientList] = useState<Client[]>([]);

  // useEffect(() => {
  //   service
  //     .listar()
  //     .then((value) => {
  //       if (value) {
  //         setDropClientList(value);
  //         //window.alert("Chegou");
  //       }
  //     })
  //     .catch(() => {
  //       console.log("Teste");
  //     });
  // }, [userAuthId, dropClientList]);

  const [descLente, setDescLente] = useState("");
  const [corLente, setCorLente] = useState("");
  const [obsLente, setObsLente] = useState("");

  const [longeOdEsf, setLongeOdEsf] = useState("");
  const [longeOdCil, setLongeOdCil] = useState("");
  const [longeOdEixo, setLongeOdEixo] = useState("");
  const [longeOdDnp, setLongeOdDnp] = useState("");
  const [longeOdDp, setLongeOdDp] = useState("");

  const [longeOeEsf, setLongeOeEsf] = useState("");
  const [longeOeCil, setLongeOeCil] = useState("");
  const [longeOeEixo, setLongeOeEixo] = useState("");
  const [longeOeDnp, setLongeOeDnp] = useState("");
  const [longeOeDp, setLongeOeDp] = useState("");

  const [pertoOdEsf, setPertoOdEsf] = useState("");
  const [pertoOdCil, setPertoOdCil] = useState("");
  const [pertoOdEixo, setPertoOdEixo] = useState("");
  const [pertoOdDnp, setPertoOdDnp] = useState("");
  const [pertoOdDp, setPertoOdDp] = useState("");

  const [pertoOeEsf, setPertoOeEsf] = useState("");
  const [pertoOeCil, setPertoOeCil] = useState("");
  const [pertoOeEixo, setPertoOeEixo] = useState("");
  const [pertoOeDnp, setPertoOeDnp] = useState("");
  const [pertoOeDp, setPertoOeDp] = useState("");

  const [resina, setResina] = useState<boolean>(false);
  const [cristal, setCristal] = useState<boolean>(false);
  const [highLife, setHighLife] = useState<boolean>(false);

  const [dataEntrega, setDataEntrega] = useState<string>();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onInvalid = (errors) => console.error(errors);

  const onSubmit = () => {
    const receita: Receita = {
      descricaoLente: descLente,
      corLente,
      observacao: obsLente,
      longeOdEsf,
      longeOdCil,
      longeOdEixo,
      longeOdDnp,
      longeOdDp,
      longeOeEsf,
      longeOeCil,
      longeOeEixo,
      longeOeDnp,
      longeOeDp,
      pertoOdEsf,
      pertoOdCil,
      pertoOdEixo,
      pertoOdDnp,
      pertoOdDp,
      pertoOeEsf,
      pertoOeCil,
      pertoOeEixo,
      pertoOeDnp,
      pertoOeDp,
      resina,
      cristal,
      highLife,
      dataEntrega,
    };

    console.log(receita);

    service
      .salvar(receita)
      .then(() => {
        alertify.success("Receita cadastrada!");
      })
      .catch(() => {
        alertify.error("Receita não cadastrada!");
      });
  };

  return (
    <>
      <Layout title="Receitas">
        <FormArea>
          <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
            <FormContainerArea>
              <div>
                <ThreeColumnInputs>
                  <div>
                    {/* <label>Data de Entrega</label> */}
                    <Input
                      label="Data de Entrega"
                      type="date"
                      id="dataEntrega"
                      value={dataEntrega}
                      {...register("dataEntrega", { required: false })}
                      onChange={(e) => setDataEntrega(e.target.value)}
                    />
                  </div>
                  <div></div>
                  <div></div>
                </ThreeColumnInputs>

                {/* <Controller
                  control={control}
                  rules={{ required: true }}
                  name="selectClient"
                  render={({ field }) => <Select />}
                />
                {errors.selectClient && <p>Campo obrigatório!</p>} */}
                <Select />

                <h3>Informações da lente</h3>

                <ThreeColumnInputsFlex>
                  <div>
                    {/* <label htmlFor="resinaCheck">Resina</label> */}
                    <Input
                      label="Resina"
                      type="checkbox"
                      id="resinaCheck"
                      checked={resina}
                      {...register("resinaCheck", { required: false })}
                      onChange={() => {
                        setResina(!resina);
                      }}
                    />
                  </div>
                  <div>
                    {/* <label htmlFor="cristalCheck">Cristal</label> */}
                    <Input
                      label="Cristal"
                      type="checkbox"
                      id="cristalCheck"
                      checked={cristal}
                      {...register("cristalCheck", { required: false })}
                      onChange={() => {
                        setCristal(!cristal);
                      }}
                    />
                  </div>
                  <div>
                    {/* <label htmlFor="highLifeCheck">High Life</label> */}
                    <Input
                      label="High Life"
                      type="checkbox"
                      id="highLifeCheck"
                      checked={highLife}
                      {...register("highLifeCheck", { required: false })}
                      onChange={() => {
                        setHighLife(!highLife);
                      }}
                      errorsInput={errors.highLife}
                    />
                  </div>
                </ThreeColumnInputsFlex>
                <div>
                  <Controller
                    render={({ field }) => (
                      <Input
                        id="descLente"
                        label="Descrição"
                        value={descLente}
                        {...register("descLente", { required: true })}
                        onChange={setDescLente}
                        errorsInput={errors.descLente && !descLente}
                      />
                    )}
                    name="descLente"
                    control={control}
                    rules={{ required: true }}
                  />
                  {errors.descLente && !descLente && <p>Campo obrigatório!</p>}
                  <Input
                    id="corLente"
                    label="Cor"
                    value={corLente}
                    {...register("corLente", { required: true })}
                    onChange={setCorLente}
                    errorsInput={errors.corLente && !corLente}
                  />
                  {errors.corLente && !corLente && <p>Campo obrigatório!</p>}
                  <Input
                    id="obsLente"
                    label="Observação"
                    type="textarea"
                    value={obsLente}
                    {...register("obsLente", { required: false })}
                    onChange={setObsLente}
                    errorsInput={errors.obsLente && !obsLente}
                  />
                  {errors.obsLente && !obsLente && <p>Campo obrigatório!</p>}
                </div>
              </div>
              <div>
                <h4>Longe</h4>
                <h5>Olho direito</h5>
                <FiveColumnInputs>
                  <div>
                    <Input
                      id="longeOdEsf"
                      label="Esf."
                      value={longeOdEsf}
                      {...register("longeOdEsf", { required: true })}
                      onChange={setLongeOdEsf}
                      errorsInput={errors.longeOdEsf && !longeOdEsf}
                    />
                    {errors.longeOdEsf && !longeOdEsf && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOdCil"
                      label="Cil."
                      value={longeOdCil}
                      {...register("longeOdCil", { required: true })}
                      onChange={setLongeOdCil}
                      errorsInput={errors.longeOdCil && !longeOdCil}
                    />
                    {errors.longeOdCil && !longeOdCil && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOdEixo"
                      label="Eixo"
                      value={longeOdEixo}
                      {...register("longeOdEixo", { required: true })}
                      onChange={setLongeOdEixo}
                      errorsInput={errors.longeOdEixo && !longeOdEixo}
                    />
                    {errors.longeOdEixo && !longeOdEixo && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOdDnp"
                      label="Dnp."
                      value={longeOdDnp}
                      {...register("longeOdDnp", { required: true })}
                      onChange={setLongeOdDnp}
                      errorsInput={errors.longeOdDnp && !longeOdDnp}
                    />
                    {errors.longeOdDnp && !longeOdDnp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOdDp"
                      label="Dp."
                      value={longeOdDp}
                      {...register("longeOdDp", { required: true })}
                      onChange={setLongeOdDp}
                      errorsInput={errors.longeOdDp && !longeOdDp}
                    />
                    {errors.longeOdDp && !longeOdDp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                </FiveColumnInputs>
                <h5>Olho esquerdo</h5>
                <FiveColumnInputs>
                  <div>
                    <Input
                      id="longeOeEsf"
                      label="Esf."
                      value={longeOeEsf}
                      {...register("longeOeEsf", { required: true })}
                      onChange={setLongeOeEsf}
                      errorsInput={errors.longeOeEsf && !longeOeEsf}
                    />
                    {errors.longeOeEsf && !longeOeEsf && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>

                  <div>
                    <Input
                      id="longeOeCil"
                      label="Cil."
                      value={longeOeCil}
                      {...register("longeOeCil", { required: true })}
                      onChange={setLongeOeCil}
                      errorsInput={errors.longeOeCil && !longeOeCil}
                    />
                    {errors.longeOeCil && !longeOeCil && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOeEixo"
                      label="Eixo"
                      value={longeOeEixo}
                      {...register("longeOeEixo", { required: true })}
                      onChange={setLongeOeEixo}
                      errorsInput={errors.longeOeEixo && !longeOeEixo}
                    />
                    {errors.longeOeEixo && !longeOeEixo && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOeDnp"
                      label="Dnp."
                      value={longeOeDnp}
                      {...register("longeOeDnp", { required: true })}
                      onChange={setLongeOeDnp}
                      errorsInput={errors.longeOeDnp && !longeOeDnp}
                    />
                    {errors.longeOeDnp && !longeOeDnp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="longeOeDp"
                      label="Dp."
                      value={longeOeDp}
                      {...register("longeOeDp", { required: true })}
                      onChange={setLongeOeDp}
                      errorsInput={errors.longeOeDp && !longeOeDp}
                    />
                    {errors.longeOeDp && !longeOeDp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                </FiveColumnInputs>
                <h4>Perto</h4>
                <h5>Olho direito</h5>
                <FiveColumnInputs>
                  <div>
                    <Input
                      id="pertoOdEsf"
                      label="Esf."
                      value={pertoOdEsf}
                      {...register("pertoOdEsf", { required: true })}
                      onChange={setPertoOdEsf}
                      errorsInput={errors.pertoOdEsf && !pertoOdEsf}
                    />
                    {errors.pertoOdEsf && !pertoOdEsf && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOdCil"
                      label="Cil."
                      value={pertoOdCil}
                      {...register("pertoOdCil", { required: true })}
                      onChange={setPertoOdCil}
                      errorsInput={errors.pertoOdCil && !pertoOdCil}
                    />
                    {errors.pertoOdCil && !pertoOdCil && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOdEixo"
                      label="Eixo"
                      value={pertoOdEixo}
                      {...register("pertoOdEixo", { required: true })}
                      onChange={setPertoOdEixo}
                      errorsInput={errors.pertoOdEixo && !pertoOdEixo}
                    />
                    {errors.pertoOdEixo && !pertoOdEixo && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOdDnp"
                      label="Dnp."
                      value={pertoOdDnp}
                      {...register("pertoOdDnp", { required: true })}
                      onChange={setPertoOdDnp}
                      errorsInput={errors.pertoOdDnp && !pertoOdDnp}
                    />
                    {errors.pertoOdDnp && !pertoOdDnp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOdDp"
                      label="Dp."
                      value={pertoOdDp}
                      {...register("pertoOdDp", { required: true })}
                      onChange={setPertoOdDp}
                      errorsInput={errors.pertoOdDp && !pertoOdDp}
                    />
                    {errors.pertoOdDp && !pertoOdDp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                </FiveColumnInputs>
                <h5>Olho esquerdo</h5>
                <FiveColumnInputs>
                  <div>
                    <Input
                      id="pertoOeEsf"
                      label="Esf."
                      value={pertoOeEsf}
                      {...register("pertoOeEsf", { required: true })}
                      onChange={setPertoOeEsf}
                      errorsInput={errors.pertoOeEsf && !pertoOeEsf}
                    />
                    {errors.pertoOeEsf && !pertoOeEsf && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>

                  <div>
                    <Input
                      id="pertoOeCil"
                      label="Cil."
                      value={pertoOeCil}
                      {...register("pertoOeCil", { required: true })}
                      onChange={setPertoOeCil}
                      errorsInput={errors.pertoOeCil && !pertoOeCil}
                    />
                    {errors.pertoOeCil && !pertoOeCil && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOeEixo"
                      label="Eixo"
                      value={pertoOeEixo}
                      {...register("pertoOeEixo", { required: true })}
                      onChange={setPertoOeEixo}
                      errorsInput={errors.pertoOeEixo && !pertoOeEixo}
                    />
                    {errors.pertoOeEixo && !pertoOeEixo && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOeDnp"
                      label="Dnp."
                      value={pertoOeDnp}
                      {...register("pertoOeDnp", { required: true })}
                      onChange={setPertoOeDnp}
                      errorsInput={errors.pertoOeDnp && !pertoOeDnp}
                    />
                    {errors.pertoOeDnp && !pertoOeDnp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                  <div>
                    <Input
                      id="pertoOeDp"
                      label="Dp."
                      value={pertoOeDp}
                      {...register("pertoOeDp", { required: true })}
                      onChange={setPertoOeDp}
                      errorsInput={errors.pertoOeDp && !pertoOeDp}
                    />
                    {errors.pertoOeDp && !pertoOeDp && (
                      <p>Campo obrigatório!</p>
                    )}
                  </div>
                </FiveColumnInputs>
                <input value="Salvar" type="submit" id="inputReceita" />
                {/* <button onClick={onSubmit}>Teste</button> */}
              </div>
            </FormContainerArea>
          </form>
        </FormArea>
      </Layout>
    </>
  );
};
