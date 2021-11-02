class CreateCrafts < ActiveRecord::Migration[6.1]
  def change
    create_table :crafts do |t|
      t.string :title
      t.string :name
      t.string :description
      t.string :email
      t.string :image
      t.string :posted_date
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
